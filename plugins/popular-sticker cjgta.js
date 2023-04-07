import { sticker } from '../lib/sticker.js'

let handler = async (m, { conn, text, usedPrefix, command }) => {

let stiker = await sticker(null, global.API(`${pickRandom(cjgta)}`), global.packname, global.author)
    if (stiker) return conn.sendFile(m.chat, stiker, 'sticker.webp', '', m)
    throw stiker.toString()
    
}
  handler.command = /^(cjgta)$/i
  handler.tags = ['popular sticker']
  handler.help = ['cjgta']
    handler.limit = true
  //handler.private = true 
  
  export default handler
  function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
  global.cjgta = [
"https://telegra.ph/file/304d0a12d547d44ef5c97.jpg",
"https://telegra.ph/file/3aa62e69d7d97cc20d22e.jpg",
"https://telegra.ph/file/79dd0d6142d1aa2037014.jpg",
"https://telegra.ph/file/e8bcb0ed508fd297e2939.jpg",
"https://telegra.ph/file/3e70f5015845263139016.jpg",
"https://telegra.ph/file/ddd18583a89b0d45b1ba2.jpg",
"https://telegra.ph/file/3b17db4769bc9679ffeb5.jpg",
"https://telegra.ph/file/fa5011cafe8d738fbad02.jpg",
"https://telegra.ph/file/d03a4c7a50a4df7762d05.jpg",
"https://telegra.ph/file/e29057e0e17872d6548d9.jpg",
"https://telegra.ph/file/9181063087e8e2d9554be.jpg",
"https://telegra.ph/file/7469889a39a1654360f65.jpg",
"https://telegra.ph/file/866f250ca3a7b75ea895f.jpg",
"https://telegra.ph/file/b71fa4e23bd7baa6080b9.jpg",
"https://telegra.ph/file/e680b195c105a5e58700a.jpg",
"https://telegra.ph/file/e0772faac21102f819a02.jpg",
"https://telegra.ph/file/ad6075133a7d88442695a.jpg",
"https://telegra.ph/file/6a5f70a14f19e86bcce70.jpg",
"https://telegra.ph/file/0ec0df6730b20598c9504.jpg",
"https://telegra.ph/file/2b47199cd9d272ed53006.jpg",
"https://telegra.ph/file/8f53ef9ca5d083670de1a.jpg",
"https://telegra.ph/file/06bb73f1458bb5bf5b02f.jpg",
"https://telegra.ph/file/a734c900c0e6ae1d4a4fa.jpg",
"https://telegra.ph/file/634b51a796b20f5917c7c.jpg",
"https://telegra.ph/file/522a48c5b47dad6df88af.jpg",
"https://telegra.ph/file/fa37c8e34f67cbb77e5d5.jpg",
"https://telegra.ph/file/d93da015b8cb173b44a56.jpg",
"https://telegra.ph/file/6a30e5157712e5775232c.jpg",
"https://telegra.ph/file/ecceaa5adab2b8ddf8b77.jpg",
"https://telegra.ph/file/92cd4c882915da5959709.jpg",
"https://telegra.ph/file/04401f331d99852e58780.jpg",
"https://telegra.ph/file/50b2fbf3526b1d33fe0b6.jpg",
"https://telegra.ph/file/5a1e320b37e83ae1da183.jpg",
"https://telegra.ph/file/34a2c494fd05aeb95fbc1.jpg",
"https://telegra.ph/file/0639a2ba5d6a1420679fb.jpg",
"https://telegra.ph/file/eb0f5f74b9463dd7e8f5c.jpg",
"https://telegra.ph/file/38f87f26e9f8a273b8158.jpg",
"https://telegra.ph/file/32538abc30916305b3aa0.jpg",
"https://telegra.ph/file/a5d142852283f895ba0d9.jpg"
  ]