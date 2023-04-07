let handler = async (m) => m.reply(`
${['Ga join Ga kece 🗿\nhttps://chat.whatsapp.com/BvSvdbqUVpn2e0MVfurLWn',
 'Join kuy, dijamin betah 🗿\nhttps://chat.whatsapp.com/BvSvdbqUVpn2e0MVfurLWn', 
 'Anak dibawah umur jgn join 🗿\nhttps://chat.whatsapp.com/BvSvdbqUVpn2e0MVfurLWn', 
 'Yang join bakal dikasih money 1jt 🗿\nhttps://chat.whatsapp.com/BvSvdbqUVpn2e0MVfurLWn', 
 'join gk qi 🗿\nhttps://chat.whatsapp.com/BvSvdbqUVpn2e0MVfurLWn', 
 'join gc bot 🗿\nhttps://chat.whatsapp.com/BvSvdbqUVpn2e0MVfurLWn'].getRandom()}
  `.trim(), null, m.mentionedJid ? {
  mentions: m.mentionedJid
} : {})

handler.help = ['group']
handler.tags = ['Bot']
handler.command = /^group$/i

export default handler
