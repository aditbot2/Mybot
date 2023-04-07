let handler = async (m, { conn, text }) => {
    let yh = global.cewekkorea
    let url = yh[Math.floor(Math.random() * yh.length)]
    conn.sendButton(m.chat, 'RANDOM PICT', 'by ragil bot 🗿🏳️‍🌈', url, [['NEXT', '#cewekkorea']], m)
  }
  handler.command = /^(cewekkorea)$/i
  handler.tags = ['random pict']
  handler.help = ['cewekkorea']
    handler.private = true
  handler.limit = true
  
  export default handler
  
  global.cewekkorea = [
"https://c.top4top.io/p_19624y1on1.jpg",
"https://k.top4top.io/p_19623z95r1.jpg",
"https://h.top4top.io/p_1962u3qhb1.jpg",
"https://g.top4top.io/p_1962koqm41.jpg",
"https://l.top4top.io/p_196298pkr1.jpg",
"https://j.top4top.io/p_1962enqpe1.jpg",
"https://e.top4top.io/p_19626rftx1.jpg",
"https://i.top4top.io/p_19623vybj1.jpg",
"https://f.top4top.io/p_1962alh5c1.jpg",
"https://d.top4top.io/p_19629dguf1.jpg",
"https://f.top4top.io/p_1962gl6nf1.jpg",
"https://h.top4top.io/p_1962umwai1.jpg",
"https://c.top4top.io/p_19625anrs1.jpg",
"https://a.top4top.io/p_1962asjl31.jpg",
"https://i.top4top.io/p_1962yt9ph1.jpg",
"https://l.top4top.io/p_1962pvq221.jpg",
"https://k.top4top.io/p_1962spcdo1.jpg",
"https://g.top4top.io/p_19620motq1.jpg",
"https://j.top4top.io/p_19625lzea1.jpg",
"https://b.top4top.io/p_1962y8lij1.jpg"
  ]