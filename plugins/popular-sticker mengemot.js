import { sticker } from '../lib/sticker.js'

let handler = async (m, { conn, text, usedPrefix, command }) => {

let stiker = await sticker(null, global.API(`${pickRandom(mengemot)}`), global.packname, global.author)
    if (stiker) return conn.sendFile(m.chat, stiker, 'sticker.webp', '', m)
    throw stiker.toString()
    
}
  handler.command = /^(mengemot)$/i
  handler.tags = ['popular sticker']
  handler.help = ['mengemot']
  handler.limit = true
  //handler.private = true 
  
  export default handler
  function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
  global.mengemot = [
"https://i.ibb.co/hfgVxfb/Sticker-To-Img-1.png",
"https://i.ibb.co/RQK61jH/Sticker-To-Img-10.png",
"https://i.ibb.co/3R5pNcm/Sticker-To-Img-11.png",
"https://i.ibb.co/kG5p4cM/Sticker-To-Img-12.png",
"https://i.ibb.co/9bgf9JH/Sticker-To-Img-13.png",
"https://i.ibb.co/CQpcFgV/Sticker-To-Img-14.png",
"https://i.ibb.co/0KWRPXh/Sticker-To-Img-15.png",
"https://i.ibb.co/3pZKPjh/Sticker-To-Img-16.png",
"https://i.ibb.co/kmRYmw5/Sticker-To-Img-17.png",
"https://i.ibb.co/725CZbL/Sticker-To-Img-18.png",
"https://i.ibb.co/2FNFV65/Sticker-To-Img-19.png",
"https://i.ibb.co/bgDSVWS/Sticker-To-Img-2.png",
"https://i.ibb.co/dKTcZp4/Sticker-To-Img-20.png",
"https://i.ibb.co/271mHsK/Sticker-To-Img-21.png",
"https://i.ibb.co/3N1wfH5/Sticker-To-Img-22.png",
"https://i.ibb.co/YRSm2VV/Sticker-To-Img-23.png",
"https://i.ibb.co/yQ2GWVc/Sticker-To-Img-24.png",
"https://i.ibb.co/JRYY1wH/Sticker-To-Img-25.png",
"https://i.ibb.co/mvGbMpL/Sticker-To-Img-26.png",
"https://i.ibb.co/hCnGJbS/Sticker-To-Img-27.png",
"https://i.ibb.co/34kv2Vf/Sticker-To-Img-28.png",
"https://i.ibb.co/Y250Y86/Sticker-To-Img-29.png",
"https://i.ibb.co/2ky2JMq/Sticker-To-Img-3.png",
"https://i.ibb.co/LSh8cCh/Sticker-To-Img-30.png",
"https://i.ibb.co/YcVrnk3/Sticker-To-Img-31.png",
"https://i.ibb.co/mXNY2vQ/Sticker-To-Img-32.png",
"https://i.ibb.co/HrCYz7G/Sticker-To-Img-4.png",
"https://i.ibb.co/M2NJWC4/Sticker-To-Img-5.png",
"https://i.ibb.co/HVHVjDp/Sticker-To-Img-6.png",
"https://i.ibb.co/F0yXhBR/Sticker-To-Img-7.png",
"https://i.ibb.co/Z27dYYT/Sticker-To-Img-8.png",
"https://i.ibb.co/j57h2Ls/Sticker-To-Img-9.png",
"https://i.ibb.co/thHwC1h/Sticker-To-Img.png",
"https://i.ibb.co/1qg0zh3/Sticker-To-Img-1.png",
"https://i.ibb.co/D7KRJ8S/Sticker-To-Img-10.png",
"https://i.ibb.co/L5dJsBX/Sticker-To-Img-11.png",
"https://i.ibb.co/kypMpkB/Sticker-To-Img-12.png",
"https://i.ibb.co/1ZxRKQF/Sticker-To-Img-13.png",
"https://i.ibb.co/cFhLShw/Sticker-To-Img-14.png",
"https://i.ibb.co/jkF3NCv/Sticker-To-Img-15.png",
"https://i.ibb.co/mHYm58W/Sticker-To-Img-16.png",
"https://i.ibb.co/ThTfvWy/Sticker-To-Img-17.png",
"https://i.ibb.co/xGxxLZ5/Sticker-To-Img-18.png",
"https://i.ibb.co/6RVWrrG/Sticker-To-Img-19.png",
"https://i.ibb.co/n19XJj2/Sticker-To-Img-2.png",
"https://i.ibb.co/2Kx8cpx/Sticker-To-Img-20.png",
"https://i.ibb.co/4JKhXFv/Sticker-To-Img-21.png",
"https://i.ibb.co/YPWRFBP/Sticker-To-Img-22.png",
"https://i.ibb.co/C8D02wG/Sticker-To-Img-23.png",
"https://i.ibb.co/t2bkxQP/Sticker-To-Img-24.png",
"https://i.ibb.co/L04qjRY/Sticker-To-Img-25.png",
"https://i.ibb.co/vZYNt7s/Sticker-To-Img-26.png",
"https://i.ibb.co/thJffCw/Sticker-To-Img-27.png",
"https://i.ibb.co/s2n5GpT/Sticker-To-Img-28.png",
"https://i.ibb.co/Z15SvBf/Sticker-To-Img-29.png",
"https://i.ibb.co/7KDLt4D/Sticker-To-Img-3.png",
"https://i.ibb.co/nPMDGRC/Sticker-To-Img-30.png",
"https://i.ibb.co/hHVQ0yY/Sticker-To-Img-31.png",
"https://i.ibb.co/N7GpGjP/Sticker-To-Img-32.png",
"https://i.ibb.co/fQ3c5jK/Sticker-To-Img-4.png",
"https://i.ibb.co/r74cwfG/Sticker-To-Img-5.png",
"https://i.ibb.co/dfDVypM/Sticker-To-Img-6.png",
"https://i.ibb.co/wwHHp29/Sticker-To-Img-7.png",
"https://i.ibb.co/RNVDVLJ/Sticker-To-Img-8.png",
"https://i.ibb.co/p2PRjfv/Sticker-To-Img-9.png",
"https://i.ibb.co/F7RxJPm/Sticker-To-Img.png"
  ]