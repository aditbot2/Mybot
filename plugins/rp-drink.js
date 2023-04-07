let handler = async (m, { conn, text }) => {
    let yh = global.drink
    let url = yh[Math.floor(Math.random() * yh.length)]
    conn.sendButton(m.chat, 'RANDOM DRINK', 'ragil bot 🗿🏳️‍🌈', url, [[' \ngw pedo', '']], m)
  }
  handler.command = /^(drink)$/i
  handler.tags = ['spill or drink']
  handler.help = ['drink']
  
  export default handler
  
  global.drink = [
    "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/8f1e6c865e5b4ef0a1f8d15b3f676202/BFV69042_HowToMakeBobaFromScratch_JP_Final_YT.jpg",
    "https://thenovicechefblog.com/wp-content/uploads/2020/03/Bubble-Tea-with-Boba-480x360.jpg",
    "https://www.tastingtable.com/img/gallery/boba-flavors-ranked-worst-to-best/intro-1649268776.jpg",
    "https://assets.epicurious.com/photos/5953ca064919e41593325d97/4:6/w_2496,h_3744,c_limit/bubble_tea_recipe_062817.jpg",
    "https://telegra.ph/file/07063507c9dbfb6eada65.jpg",
    "https://telegra.ph/file/3c495c9c94066ac7cf9b0.jpg",
    "https://telegra.ph/file/5effc6d88231dff566cc3.jpg",
    "https://telegra.ph/file/e4b324659164d01f3db6b.jpg",
    "https://telegra.ph/file/c9da3617f1e3d068ec37e.jpg",
    "https://telegra.ph/file/d3263e4fb136db5d51bc2.jpg",
    "https://telegra.ph/file/a4cd91e2976c9309b6986.jpg",
    "https://telegra.ph/file/1e7bfa148d0eeb93e8fef.jpg",
    "https://telegra.ph/file/ca28d857a965d1c2fab4b.jpg",
    "https://telegra.ph/file/3d97c6ee78b286da14245.jpg",
    "https://telegra.ph/file/6c67e9eccbbf582ecbe3f.jpg",
    "https://telegra.ph/file/cb8768aed5a86776b20db.jpg",
    "https://telegra.ph/file/2059873f09d8b8201951e.jpg",
    "https://telegra.ph/file/c9fe3d77675bac48b845b.jpg",
    "https://telegra.ph/file/581ff78517e1f445687ec.jpg",
    "https://telegra.ph/file/d777edb7ac385d18346f0.jpg",
    "https://telegra.ph/file/5b4e553d9c6ff9cd6039e.jpg",
    "https://telegra.ph/file/afc1d99edb540dd4c8c61.jpg",
    "https://telegra.ph/file/ee66a7b02e7912c8adde5.jpg",
    "https://telegra.ph/file/59a2efeb3508ae65c0953.jpg",
    "https://telegra.ph/file/3e4729a6892a8dfafd8cf.jpg",
    "https://telegra.ph/file/7bffc4fa7873b46de5e64.jpg",
    "https://telegra.ph/file/c5fcd3b60ebb58e2d6a24.jpg",
    "https://telegra.ph/file/35425c80a00f4d6a02431.jpg",
    "https://telegra.ph/file/ce907306a331df4287c49.jpg",
    "https://telegra.ph/file/02038c4a4adf344555cdb.jpg",
    "https://telegra.ph/file/29659d2c8c7399222d20b.jpg",
    "https://telegra.ph/file/d45b4061c16c1ce389c54.jpg",
    "https://telegra.ph/file/12c7db49565322cfd7ec1.jpg",
    "https://telegra.ph/file/099e5207630d4b21147e9.jpg",
    "https://telegra.ph/file/1252a295ccc115294bc81.jpg",
    "https://telegra.ph/file/0b4e7964dee0581309e7f.jpg",
    "https://telegra.ph/file/39f4f04de9216993dab7f.jpg",
    "https://telegra.ph/file/c2c6c28c71a71ddcee989.jpg",
    "https://telegra.ph/file/52b0f393fd493a2d0254a.jpg",
    "https://telegra.ph/file/7675ddac3e5dc7d54c3fd.jpg",
    "https://telegra.ph/file/363ae939b2a9be2ce6047.jpg"
  ]