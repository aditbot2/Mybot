let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})( [0-9]{1,3})?/i

let handler = async (m, { conn, text, isOwner }) => {
    let [_, code, expired] = text.match(linkRegex) || []
    if (!code) throw 'Link invalid'
    let res = await conn.groupAcceptInvite(code)
    expired = Math.floor(Math.min(999, Math.max(30, isOwner ? isNumber(expired) ? parseInt(expired) : 0 : 3)))
    m.reply(`Successfully joined the group ${res}${expired ? ` for ${expired} days` : ''}`)

    if (!chats) chats = global.db.data.chats[res] = {}
    if (expired) chats.expired = +new Date() + expired * 1000 * 60 * 60 * 720
}
handler.help = ['join <group-link>']
handler.tags = ['main']

handler.command = /^join$/i

handler.owner = true

export default handler

const isNumber = (x) => (x = parseInt(x), typeof x === 'number' && !isNaN(x))