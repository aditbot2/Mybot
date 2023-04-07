import { asahotak } from '@bochilteam/scraper'

let timeout = 60000
let poin = 1000
let handler = async (m, { conn, usedPrefix }) => {
    conn.asahotak = conn.asahotak ? conn.asahotak : {}
    let id = m.chat
    if (id in conn.asahotak) return conn.reply(m.chat, 'Masih ada soal belum terjawab di chat ini', conn.asahotak[id][0])
    let json = await asahotak()
    let caption = `
${json.soal}
Timeout *${(timeout / 1000).toFixed(2)} detik*
Ketik ${usedPrefix}tkt untuk bantuan

*‼️REPLY SOAL UNTUK MENJAWAB‼️*
`.trim()
    conn.asahotak[id] = [
        await conn.sendButton(m.chat, caption, author, null, [['Bantuan', `${usedPrefix}tkt`]], m),
        json, poin,
        setTimeout(async () => {
            if (conn.asahotak[id]) await conn.sendButton(m.chat, `Waktu habis!\nJawabannya adalah *${json.jawaban}*\n${json.deskripsi}`, author, null, [['Asah Otak', `${usedPrefix}asahotak`]], conn.asahotak[id][0])
            delete conn.asahotak[id]
        }, timeout)
    ]
}
handler.help = ['asahotak']
handler.tags = ['game']
handler.command = /^asahotak/i
handler.limit = true
export default handler