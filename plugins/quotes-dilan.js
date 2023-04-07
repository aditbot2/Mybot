let handler = async (m, { conn, usedPrefix }) => conn.sendButton(m.chat, `"${dilanquote.getRandom()}",`, author, ['NEXT', ``], m)

handler.help = ['dilanquote']
handler.tags = ['quotes']
handler.command = /^(dilanquote)$/i

export default handler


// https://jalantikus.com/tips/kata-kata-dilanquote/
const dilanquote = [
"Hidup itu misterius, kita tidak akan pernah benar-benar mengerti mengapa kenyataan harus berakhir seperti itu aku harus bisa menerimanya.",
"Memang tidak salah untuk berharap, tapi aku harus tahu kapan berhenti.",
"Aku gak pandai cemburu. Malahan, kalau kamu ninggalin aku, aku gak bisa apa-apa. Bisaku cuma mencintaimu.",
"Cemburu itu hanya untuk orang-orang yang tidak percaya diri. Jadi, ya sekarang aku sedang tidak percaya diri.",
"Dik jangan pergi jauh-jauh, kan ada darahku di tubuhmu.",
"Walau tubuhku di situ, tetapi pikiranku terus mengembara ke Dilan. Sungguh, aku tidak pernah berpikir akan mencintai orang lain selain Dilan. aku hanya ingin Dilan.",
"Dia tidak hebat, tidak, malah mungkin biasa saja. Tapi dia bisa membuatku senang hanya dengan hal sederhana.",
"Meskipun, perasaan cemburu itu normal di dalam sebuah hubungan, aku tidak ingin terjebak oleh itu karena aku sangat benci merasa cemburu.",
"Aku sedang berbohong jika aku mengatakan bahwa aku tidak kecewa, tapi aku tidak ingin memiliki pikiran yang buruk tentang hubungan cinta yang putus.",
"Tapi biar bagaimanapun, itu adalah harinya, di mana dan kapan pun, setiap aku mengingatnya, aku akan langsung tersenyum.",
"Jangan rindu, ini berat. Kau tak akan kuat. Biar aku saja.",
 "Terima kasih, Dilan. Kamu pernah mau kepadaku. Dan kini, biarkan aku kalau selalu ingin tahu kabarmu.",
"PR-ku adalah merindukanmu. Lebih kuat dari Matematika. Lebih luas dari Fisika. Lebih kerasa dari Biologi.",
"Jangan bilang ke aku ada yang menyakitimu. Nanti besoknya, orang itu akan hilang.",
 "Tolong sampein ke Bunda, Terima kasih udah lahirin orang yang aku cinta.",
 "Aku tidak ingin mengekangmu. Terserah! Bebas ke mana engkau pergi. Asal aku ikut.",
 "Kalau kamu bohong, itu hak kamu. Asal jangan aku yang bohong ke kamu.",
 "Angin, untuk meniup rambutmu. Aku, untuk mencintaimu.",
 "Malam ini, kalau tidur jangan ingat aku, ya! Tapi kalau mau, silakan.",
 "Kalau mencintaimu adalah kesalahan, yasudah. Biar. Aku salah terus saja.",
"Bolehkan aku punya pendapat. Ini tentang dia yang ada di bumi. Ketika Tuhan menciptakan dirinya, kukira dia ada maksud mau pamer.",
"Masa lalu adalah masa lalu, tak usah dihindari atau kau tolak. Masa lalu akan menjadi penasihat yang baik. Tidak ada gunanya kau sesali. biarlah itu hadir sebagai aliran yang membawamu peergi ke tujuan yang lebih baik.",
"Aku merindukannya dan tidak bisa mendapatkan dia keluar dari pikiranku, jujur aku tidak bisa melupakannya.",
"Jangan menangis, karena kamu adalah alasan seseorang tersenyum.",
"Tapi kalau gak ada kamu, aku suka rindu.",
"Pemberitahuan: Sejak sore kemarin. Aku sudah mencintaimu.",
"Aku gak pandai cemburu. Malahan, kalau kamu ninggalin aku, aku gak bisa apa-apa. Bisaku cuma mencintaimu.",
"Jika hujan, aku tak akan memberimu jaket. Sebab jika aku sakit, lalu siapa yang akan menjagamu?",
"Dan tetaplah denganku, sampai engkau terbiasa bersama semua hal yang berkaitan denganku.",
"Aku merasa terjebak di dalam keadaan yang mengambang. Terus memandang keluar jendela mobilku dan semua yang kulihat adalah kenangan.",
"Biar bagaimanapun tidak ada yang akan baik-baik saja tentang sebuah perpisahan.",
"Dulu, segala sesuatu tampak indah, Sama sekali aku tidak pernah berpikir bahwa akhirnya kita harus berpisah. Sulit untuk dipercaya, tetapi itulah yang terjadi.",
"Kalau kamu ninggalin aku, itu hak kamu, asal jangan aku yang ninggalin kamu. Aku takut kamu kecewa.",
"Dia bukan gadis yang harus nampak mewah agat terlihat keren oleh isi dunia dan tidak merasa harus memiliki apa-apa yang tidak dia butuhkan hanya agar bisa sama dengan yang lain.",
"Asal kamunya tetap ada di bumi. Udah cukup, udah bikin aku senang.",
"Walau bagaimanapun, tempat itu menjadi salah satu saksinya untuk banyak kenangan yang pernah aku alami bersama ayah.",
"Aku tidak cemburu. Dia adalah bagian diriku. Dia adalah teritorialku, wilayah yang sudah menjadi milikku. Dan masa lalu bukan untuk diperdebatkan.",
"Tenang saja, perpisahan tak menyedihkan, yang menyedihkan adalah bila habis itu saling lupa",
"Dan sekarang, yang tetap dalam diriku adalah kenangan di sanalah kamu selalu.",
"Tidak akan ada satupun orang yang terbiasa dengan kehilangan.",
"Tidak ada satu orang pun yang terbiasa dengan kehilangan.",
"Memang tidak salah untuk berharap, tapi aku harus tahu kapan berhenti.",
"Dan sekarang, yang tetap dalam diriku adalah kenangan di sanalah kamu selalu.",
"Biar bagaimanapun, tidak ada yang akan baik-baik saja tentang sebuah perpisahan.",
"Kalau aku jadi presiden yang harus mencintai seluruh rakyatnya, aduh, maaf, aku pasti tidak bisa karena aku Cuma suka Milea.",
"Dan masa lalu bukan untuk diperdebatkan.",
"Jangan pergi jauh-jauh, kan ada darahku di tubuhmu.",
"Malam akan sunyi tanpa rembulan, karena takkan kudengar lagi tawamu.",
"Aku mencintaimu. Biarlah ini urusanku. Bagaimana engkau kepadaku, itu urusanmu.",
"Tenang saja, perpisahan tak menyedihkan, yang menyedihkan adalah bila habis itu saling lupa."
]