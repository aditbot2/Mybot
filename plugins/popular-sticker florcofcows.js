import { sticker } from '../lib/sticker.js'

let handler = async (m, { conn, text, usedPrefix, command }) => {

let stiker = await sticker(null, global.API(`${pickRandom(florcofcows)}`), global.packname, global.author)
    if (stiker) return conn.sendFile(m.chat, stiker, 'sticker.webp', '', m)
    throw stiker.toString()
    
}
  handler.command = /^(florcofcows)$/i
  handler.tags = ['popular sticker']
  handler.help = ['florcofcows']
  handler.limit = true
  //handler.private = true 
  function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
  export default handler
  
  global.florcofcows = [
"https://telegra.ph/file/d9c6a5549cec79e7e90be.jpg",
"https://telegra.ph/file/9a2e65ddc4b593974470d.jpg",
"https://telegra.ph/file/07caba10e9ef9d2f2bd9d.jpg",
"https://telegra.ph/file/ba7e63b06bcf0c4df78d5.jpg",
"https://telegra.ph/file/f0d6ba53da2e340662a2f.jpg",
"https://telegra.ph/file/9c83fca016b30dc5802a5.jpg",
"https://telegra.ph/file/d8b89f775100a85fcb059.jpg",
"https://telegra.ph/file/5e09b296099a3fa541026.jpg",
"https://telegra.ph/file/c341fd4409e28cb34fbf6.jpg",
"https://telegra.ph/file/b820200106b8b9faadb90.jpg",
"https://telegra.ph/file/3992c1f322c308d9c23f0.jpg",
"https://telegra.ph/file/5f524b766824f6a21a6f6.jpg",
"https://telegra.ph/file/e8228132ec7ae3efe323a.jpg",
"https://telegra.ph/file/696584991bd40a658d8d7.jpg",
"https://telegra.ph/file/5559d3580d3ec3a720d51.jpg",
"https://telegra.ph/file/b38b4cc1afb7d34b16dc0.jpg",
"https://telegra.ph/file/edd390b44a93c421087e2.jpg",
"https://telegra.ph/file/9e0e65b58e601cc5e5dec.jpg",
"https://telegra.ph/file/d77fe0cc18098bd502f81.jpg",
"https://telegra.ph/file/ed711309237b07c8d9001.jpg",
"https://telegra.ph/file/b37a28e1e4120e2379a96.jpg",
"https://telegra.ph/file/684dd49b7afc839db7f17.jpg",
"https://telegra.ph/file/a66c11a9167a67711143e.jpg",
"https://telegra.ph/file/636421263d5e796faf11b.jpg",
"https://telegra.ph/file/574bb91ae763f2d3986eb.jpg",
"https://telegra.ph/file/f631ec28b00868222b416.jpg",
"https://telegra.ph/file/f6e54b4eb73f18e254c0b.jpg",
"https://telegra.ph/file/6bfbb711253dffcc8c8a8.jpg",
"https://telegra.ph/file/3f02ca8d5ee968231dbb8.jpg",
"https://telegra.ph/file/ecb9ed887349128788bf5.jpg",
"https://telegra.ph/file/e580f9f01a1c7735f17a2.jpg",
"https://telegra.ph/file/e390fe4a6dcb4c195c06d.jpg",
"https://telegra.ph/file/03d19fe9ffbc0faeb3316.jpg",
"https://telegra.ph/file/a61dae3126bbdfd364c1c.jpg",
"https://telegra.ph/file/f51c4df1d7f13ab63a491.jpg",
"https://telegra.ph/file/17a77fa94750b22644241.jpg",
"https://telegra.ph/file/2d0505d4568b81b2946ad.jpg",
"https://telegra.ph/file/fa9100c99dc50db91f57b.jpg",
"https://telegra.ph/file/d559d7f4846fe03eba254.jpg",
"https://telegra.ph/file/00b02292f79cb64b740a5.jpg",
"https://telegra.ph/file/f3e36f93c8f7038b54f53.jpg",
"https://telegra.ph/file/c75d28bedfbfdc0cc4adf.jpg",
"https://telegra.ph/file/cb30813039cfafefb4e51.jpg",
"https://telegra.ph/file/f34eb800f70af6af17aa1.jpg",
"https://telegra.ph/file/0cd61e23bd48fff7b6d87.jpg",
"https://telegra.ph/file/c4f29612e2b9599c29805.jpg",
"https://telegra.ph/file/5c40e3d96c540352823d3.jpg",
"https://telegra.ph/file/c13e0288bbd1e0e69eb2f.jpg",
"https://telegra.ph/file/f02a52c8fa2d72f798a2f.jpg",
"https://telegra.ph/file/657712e0a3673f949a67c.jpg",
"https://telegra.ph/file/31ec9c819068697e48d12.jpg",
"https://telegra.ph/file/874c702c53cc44eb7ffa9.jpg",
"https://telegra.ph/file/6ed8479bb4d917bc911c3.jpg",
"https://telegra.ph/file/50d49616736a9fcfcb1d1.jpg",
"https://telegra.ph/file/f2f7771877f6909e53507.jpg",
"https://telegra.ph/file/be5544a52db4ff6d754d5.jpg",
"https://telegra.ph/file/3c0b8620370cb8fad04dd.jpg",
"https://telegra.ph/file/218ae6a83d1b9672fe618.jpg",
"https://telegra.ph/file/9afedc2c8dc70a8dc04aa.jpg",
"https://telegra.ph/file/04147d48ec54cb2e25f65.jpg",
"https://telegra.ph/file/6ffedc4a8bde42cde9287.jpg",
"https://telegra.ph/file/485e17f1879564bfc0024.jpg",
"https://telegra.ph/file/45a41b96fdbd7d5ffc519.jpg",
"https://telegra.ph/file/0b07976897c2f71506ed6.jpg",
"https://telegra.ph/file/bcb604df81247db1a89ce.jpg",
"https://telegra.ph/file/a5d985a7ec16d5316c601.jpg",
"https://telegra.ph/file/c6cac18b1daefaecedf01.jpg",
"https://telegra.ph/file/1ac2e2640fe343b2f97ab.jpg",
"https://telegra.ph/file/0b15fae93f1263251de50.jpg",
"https://telegra.ph/file/97307966870ce5c10d38c.jpg",
"https://telegra.ph/file/3dc130cade1a8f813de49.jpg",
"https://telegra.ph/file/99a0b4698f74b1587122e.jpg",
"https://telegra.ph/file/40db628ffe28325a4e8a9.jpg",
"https://telegra.ph/file/21d43e0c12c321515992e.jpg",
"https://telegra.ph/file/32d40d3e13d046584d9c4.jpg",
"https://telegra.ph/file/4535ffc0ab46ede9e3910.jpg",
"https://telegra.ph/file/bab9ecfaff709a2581714.jpg",
"https://telegra.ph/file/475e380290721e5e73107.jpg",
"https://telegra.ph/file/0e336be8c137fd299df22.jpg",
"https://telegra.ph/file/8323f4e0008903e49b474.jpg",
"https://telegra.ph/file/ea351a6e6cbc1aef15279.jpg",
"https://telegra.ph/file/e73b7ae2eee82c751da57.jpg",
"https://telegra.ph/file/0482c79e1d7379970b7c7.jpg",
"https://telegra.ph/file/57b8ea902f17476cf0336.jpg" 
  ]