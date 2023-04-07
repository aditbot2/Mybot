import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix }) => {
    let res = await fetch('https://api.waifu.pics/nsfw/neko')
    if (!res.ok) throw await res.text()
    let json = await res.json()
    if (!json.url) throw 'Error!'
    conn.sendButton(m.chat, 'Crush kok 2d 🗿', author, json.url, [['neko', `${usedPrefix}nsfwneko`]], m)
}
handler.help = ['nsfwneko']
handler.tags = ['nsfw']
handler.command = /^(nsfwneko)$/i
//MADE IN ERPAN 1140 BERKOLABORASI DENGAN BTS
handler.private = true
handler.limit = true


export default handler