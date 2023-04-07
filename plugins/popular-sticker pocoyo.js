import { sticker } from '../lib/sticker.js'

let handler = async (m, { conn, text, usedPrefix, command }) => {

let stiker = await sticker(null, global.API(`${pickRandom(pocoyo)}`), global.packname, global.author)
    if (stiker) return conn.sendFile(m.chat, stiker, 'sticker.webp', '', m)
    throw stiker.toString()
    
}
  handler.command = /^(pocoyo)$/i
  handler.tags = ['popular sticker']
  handler.help = ['pocoyo']
  handler.limit = true
  //handler.private = true 
  
  export default handler
  function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
  global.pocoyo = [
"https://i.ibb.co/r41fyT7/1-sticker.png",
"https://i.ibb.co/CnxQL71/angry-sticker-1.png",
"https://i.ibb.co/PZ6Sqhq/angry-sticker.png",
"https://i.ibb.co/DMC7pw5/anguished-sticker.png",
"https://i.ibb.co/vVd5tMs/blush-sticker.png",
"https://i.ibb.co/m9tYq64/camera-flash-sticker.png",
"https://i.ibb.co/fYsK0ZL/closed-umbrella-sticker.png",
"https://i.ibb.co/fSrX1W3/confounded-sticker.png",
"https://i.ibb.co/LvG1Y9N/cry-sticker.png",
"https://i.ibb.co/g6SGwYh/dancing-women-sticker.png",
"https://i.ibb.co/41nY4hV/disappointed-relieved-sticker.png",
"https://i.ibb.co/d0d1S5F/drooling-face-sticker.png",
"https://i.ibb.co/LDTybcj/eggplant-sticker-1.png",
"https://i.ibb.co/PckbbkB/eggplant-sticker.png",
"https://i.ibb.co/mFnSBtJ/eyes-sticker.png",
"https://i.ibb.co/NKpq2tn/flushed-sticker.png",
"https://i.ibb.co/7JNSLz7/hand-over-mouth-sticker-1.png",
"https://i.ibb.co/6R1bddf/hand-over-mouth-sticker.png",
"https://i.ibb.co/VwVz1dj/handshake-sticker.png",
"https://i.ibb.co/hVKDFxB/heart-sticker.png",
"https://i.ibb.co/2W1xP6k/joy-sticker.png",
"https://i.ibb.co/MVLWDtV/kissing-heart-sticker-1.png",
"https://i.ibb.co/QJwKbtg/kissing-heart-sticker.png",
"https://i.ibb.co/Tc07gP7/monocle-sticker.png",
"https://i.ibb.co/N2633HX/neutral-face-sticker.png",
"https://i.ibb.co/MhGmqGV/no-mouth-sticker.png",
"https://i.ibb.co/b6t945g/peach-sticker.png",
"https://i.ibb.co/ggBccnb/pensive-sticker.png",
"https://i.ibb.co/ZTxxNnN/red-car-sticker.png",
"https://i.ibb.co/Gx82QNm/relaxed-sticker-1.png",
"https://i.ibb.co/Jjxm1cK/relaxed-sticker.png",
"https://i.ibb.co/FwV7YkK/relieved-sticker.png",
"https://i.ibb.co/R3CgWW1/sleeping-sticker.png",
"https://i.ibb.co/CWwJgWF/slightly-smiling-face-sticker.png",
"https://i.ibb.co/K6pvQhz/smile-sticker.png",
"https://i.ibb.co/gPNhRCt/smirk-sticker.png",
"https://i.ibb.co/JkkD71w/sweat-smile-sticker.png",
"https://i.ibb.co/NsckQ2b/sweat-sticker.png",
"https://i.ibb.co/m6WPQvt/thinking-sticker.png",
"https://i.ibb.co/1Jw5XHR/triumph-sticker.png",
"https://i.ibb.co/ygryJrm/two-men-holding-hands-sticker.png",
"https://i.ibb.co/TR7Pd6f/unamused-sticker.png",
"https://i.ibb.co/DbJDBMT/undefined-sticker-1.png",
"https://i.ibb.co/f0j7c48/undefined-sticker-2.png",
"https://i.ibb.co/YQbFy9b/undefined-sticker-3.png",
"https://i.ibb.co/QmxCjCX/undefined-sticker-4.png",
"https://i.ibb.co/L8FN1Hm/undefined-sticker-5.png",
"https://i.ibb.co/HH28xrj/undefined-sticker-6.png",
"https://i.ibb.co/VDLS6FY/undefined-sticker-7.png",
"https://i.ibb.co/0JwmFf3/undefined-sticker.png",
"https://i.ibb.co/gvhQrmd/upside-down-face-sticker.png",
"https://i.ibb.co/02FYt2b/wave-sticker.png",
"https://i.ibb.co/86ZCCMK/woozy-sticker.png",
"https://i.ibb.co/nfk05W0/zzz-sticker.png"
  ]