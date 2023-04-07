/*const similarity = require('similarity')
*/
import similarity from 'similarity'
const threshold = 0.72
let handler = m => m
handler.before = async function (m) {
    let id = m.chat
    if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !/Ketik.*leka/i.test(m.quoted.text)) return !0
    this.lengkapikalimat = this.lengkapikalimat ? this.lengkapikalimat : {}
    if (!(id in this.lengkapikalimat)) return m.reply('Soal Itu Telah Berakhir')
    if (m.quoted.id == this.lengkapikalimat[id][0].id) {
        let json = JSON.parse(JSON.stringify(this.lengkapikalimat[id][1]))
        // m.reply(JSON.stringify(json, null, '\t'))
        if (m.text.toLowerCase() == json.jawaban.toLowerCase().trim()) {
            //global.db.data.users[m.sender].exp += this.lengkapikalimat[id][2]
            m.reply('*Jawabanmu BENAR 🥳🎉*')
            delete this.lengkapikalimat[id]
        } else if (similarity(m.text.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold) m.reply(`*Dikit Lagi!*`)
        else m.reply(`*Maaf Jawabanmu SALAH 🥺*`)
    }
    return !0
}
handler.exp = 0

export default handler
