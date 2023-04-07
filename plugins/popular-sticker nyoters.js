import { sticker } from '../lib/sticker.js'

let handler = async (m, { conn, text, usedPrefix, command }) => {

let stiker = await sticker(null, global.API(`${pickRandom(nyoters)}`), global.packname, global.author)
    if (stiker) return conn.sendFile(m.chat, stiker, 'sticker.webp', '', m)
    throw stiker.toString()
    
}
  handler.command = /^(nyoters)$/i
  handler.tags = ['popular sticker']
  handler.help = ['nyoters']
  handler.limit = true
  //handler.private = true 
  
  export default handler
  function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
  global.nyoters = [
"https://i.ibb.co/NsMFYVB/undefined-sticker-1.png",
"https://i.ibb.co/nsFkBwL/undefined-sticker-10.png",
"https://i.ibb.co/zHfXRk6/undefined-sticker-11.png",
"https://i.ibb.co/52sDVCK/undefined-sticker-12.png",
"https://i.ibb.co/C2MdH7C/undefined-sticker-13.png",
"https://i.ibb.co/PZyQSPs/undefined-sticker-14.png",
"https://i.ibb.co/vdpbF5L/undefined-sticker-15.png",
"https://i.ibb.co/gj7MDzf/undefined-sticker-16.png",
"https://i.ibb.co/bvnFKqV/undefined-sticker-17.png",
"https://i.ibb.co/kygBv2k/undefined-sticker-18.png",
"https://i.ibb.co/qM5v2Jk/undefined-sticker-19.png",
"https://i.ibb.co/BPLTBN3/undefined-sticker-2.png",
"https://i.ibb.co/9qNQ5pc/undefined-sticker-20.png",
"https://i.ibb.co/c2hF7j9/undefined-sticker-21.png",
"https://i.ibb.co/wYK83qW/undefined-sticker-22.png",
"https://i.ibb.co/Stbt8yb/undefined-sticker-23.png",
"https://i.ibb.co/d2JYyfh/undefined-sticker-24.png",
"https://i.ibb.co/dtb3KNF/undefined-sticker-25.png",
"https://i.ibb.co/4thhmqr/undefined-sticker-26.png",
"https://i.ibb.co/DKXBmB5/undefined-sticker-27.png",
"https://i.ibb.co/Wpn8H0L/undefined-sticker-28.png",
"https://i.ibb.co/nbHZ56b/undefined-sticker-29.png",
"https://i.ibb.co/54DjmdH/undefined-sticker-3.png",
"https://i.ibb.co/KzSfQkz/undefined-sticker-30.png",
"https://i.ibb.co/ySSNWrV/undefined-sticker-31.png",
"https://i.ibb.co/9tN8Dsk/undefined-sticker-32.png",
"https://i.ibb.co/7GPKvX2/undefined-sticker-4.png",
"https://i.ibb.co/DMWnDjJ/undefined-sticker-5.png",
"https://i.ibb.co/TBKQ2yd/undefined-sticker-6.png",
"https://i.ibb.co/Vgs6pMn/undefined-sticker-7.png",
"https://i.ibb.co/Y2JfdtD/undefined-sticker-8.png",
"https://i.ibb.co/yPWrMWn/undefined-sticker-9.png",
"https://i.ibb.co/1L8fJLc/undefined-sticker.png"
  ]