let handler = async (m, { conn }) => {
    conn.susunkata = conn.susunkata ? conn.susunkata : {}
    let id = m.chat
    if (!(id in conn.susunkata)) throw false
    let json = conn.susunkata[id][1]
    let ans = json.jawaban.trim()
    let clue = ans.replace(/[bcdfghjklmnopqrstvwxyz]/gi, '_')
    m.reply('```' + clue + '```')
}
handler.command = /^susunjawab$/i

handler.limit = true

export default handler