import similarity from 'similarity'
const threshold = 0.72
export async function before(m) {
    let id = m.chat
    if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !m.text || !/Ketik.*susunjawab/i.test(m.quoted.text) || /.*(susunjawab|susunjawab)/i.test(m.text))
        return !0
    this.susunkata = this.susunkata ? this.susunkata : {}
    if (!(id in this.susunkata))
        return conn.sendButton(m.chat, 'Soal itu telah berakhir', author, ['susunkata', '/susunkata'], m)
    if (m.quoted.id == this.susunkata[id][0].id) {
        let json = JSON.parse(JSON.stringify(this.susunkata[id][1]))
        // m.reply(JSON.stringify(json, null, '\t'))
        if (m.text.toLowerCase() == json.jawaban.toLowerCase().trim()) {
                                        m.reply('*Jawabanmu BENAR 🥳🎉*')
            clearTimeout(this.susunkata[id][3])
            delete this.susunkata[id]
        } else if (similarity(m.text.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold)
            m.reply(`*Dikit Lagi!*`)
        else
            m.reply(`*Maaf Jawabanmu SALAH 🥺*`)
    }
    return !0
}
export const exp = 0