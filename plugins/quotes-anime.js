let handler = async (m, { conn, usedPrefix }) => conn.sendButton(m.chat, `“${animequote.getRandom()}”`, author, ['ANIMEQUOTE', ``], m)

handler.help = ['animequote']
handler.tags = ['quotes']
handler.command = /^(animequote)$/i

export default handler


// https://jalantikus.com/tips/kata-kata-animequote/
const animequote = [
"Cinta tak pernah salah dan cinta tak pernah menyakiti. - Belle (Beauty and the Beast)",
"Manusia pasti akan berubah selama mereka hidup, belajarlah untuk menghargai dirimu sendiri. - Fujiwara (Code Breaker)",
 "Cinta itu dapat mengubah seseorang menjadi baik atau buruk. - Misawa (Tonari no Kaibutsu-Kun)",
 "Berbohong itu adalah awal dari kejahatan. - Yamamoto (Katekyo Hitman Reborn)",
 "Aku lebih baik percaya dan menyesal daripada ragu tapi menyesal. - Kirito (Sword Art Online)",
 "Cinta harus berasal dari hati. Maka jika tidak dari hati, jangan pernah berucap bahwa kamu menCintai. -Faye Valentine ~ Cowboy Bebop",
 "Kupikir seorang gadis terlihat lucu saat dia sedang senang ataupun sedih. - Youto (Hentai Ouji to Warawanai Neko)",
 "Yang lebih kuat bertanggung jawab pada yg lemah. - Maou (Hataraku Maou-sama)",
 "Jika aku bisa berguna, matipun tak masalah. - Armin (Shingeki no Kyojin)",
 "Ada Teori bahwa hati adalah yg menentukan kecepatan proses berpikir manusia. - Kuroyuki (Accel World)",
 "Aku tidak suka hubungan yg tidak jelas. - Senjougahara (Bakemonogatari)",
 "Hanya orang bodoh yang mati demi Cinta, aku akan bertahan hidup untuk Cinta. -Ryo Saeba ~ City Hunter]",
 "Laki-laki yg baik itu terbentuk karna ada perempuan yg baik di sebelahnya. - Hotaru (Kagetora)",
 "Saat aku mulai mencintaimu, saat itulah aku mulai belajar mencintai diriku sendiri. (Charming Junkie)",
 "Apa yg indah bukanlah dunia, tapi matamu yg mempunyai keindahan itu. - Kuran (Vampire Knight)",
 "Cinta adalah sesuatu yang harusnya kau bagikan ke semua orang. -Yuuri Shibuya ~ Kyou kara Maou!]",
 "Lebih baik sendiri, daripada bersama seseorang yang membuatmu merasa kesepian. -Mira",
 "Aku selalu berpikir Cinta itu artinya ingin selalu bersama seseorang, yg sebenarnya sangat berharga dalam hidupku. - Itsuki (Spas-Pa)",
 "Menyakitkan saat seseorang yang kamu perjuangkan tidak kembali memperjuangkanmu. -Kaito Daimon ~ Phi Brain",
 "Hidup terlalu singkat jika terus mengenang Cintamu di masa lalu, disaat kamu bisa menciptakan cerita baru dengan yang menCintaimu. -Dio",
"Orang yg berpengetahuan luas selalu ingin membagikan pengetahuannya. - Profesor (Gash Bell)",
"Kamu tidak bisa menilai buku hanya dari sampulnya. - Naito (Persona 4 The Animation)",
"Betapa teganya seseorang yang membangkitkan perasaan Cinta tanpa membangkitkan kesungguhan untuk menCintainya. -Momo",
"Seseorang yang patah hati bukanlah menjadi sendiri, tetapi menjadi orang asing untuk seseorang yang pernah kamu Cintai. -Mona",
"Cewek itu seharusnya lembut dan baik, dan bisa menyembuhkan luka dihati. - Yoshii (Baka to Test)",
"Jika udah ada satu yg tercepat, tidak diperlukan lagi yg kedua. - Takaba (Let's and Go)",
"Cinta yg sejati adalah ketika kamu buta akan sekelilingmu. - Eikichi (GTO)",
"Mencintai itu mudah, yg sulit adalah menerimanya. - Yoh (Shaman King)",
"Mendo'akan orang yg kita cintai agar selalu bahagia, itulah arti cinta sejati. - Hanasaki (Wedding Peach)",
"Manusia akan menjadi lebih berarti ketika mereka menjalani hidupnya yg terbatas, bersama dengan orang yg mereka cintai. - Alviss (MAR)",
"Kamu tak bisa maju jika terus melihat kebelakang. - Guy (Tales of the Abyss)",
"Lelaki itu punya impian yg tidak mungkin dimengerti perempuan. - Kayoko (Bakuman)",
"Tidak peduli apa yg kita lihat. Agar orang didekat kita tetap bahagia, kita harus tersenyum. - Aria (Katekyo Hitman Reborn)",
"Bukan menang atau kalah, tapi kesolidaritasan kita lah yg paling penting. - Mamoru (Inazuma Eleven)",
"Kita banyak membuang waktu mencari kekasih yg sempurna dari pada menciptakan cinta yg sempurna. - BlackCat (Black Cat)",
"Karena tau rasa kesepian, manusia akan menjadi lebih baik. Karena tau rasa sedih, manusia akan menjadi kuat. - Myuto (Princess Tutu)",
"Jika kamu menCintai seseorang, jangan pernah membuat hatinya menangis meskipun hanya beberapa menit. -Novu]",
   "Saat kamu harus memilih satu cinta aja, pasti ada orang lain yg menangis. - Tsubame (Ai Kora)",
"Seberapa banyak lagi cinta yg kamu butuhkan untuk menerima aku? - Masamune (Sekai Ichi Hatsukoi)",
]