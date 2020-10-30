const Discord = require('discord.js'); 
 
exports.run = async(client, message, args) => {
 
 const Embed = new Discord.RichEmbed()
 .setTimestamp()
 .setAuthor("Guard Bot", client.user.avatarURL)
.setColor("BLACK")
.setTitle("Seltius ")
 .setURL("https://discord.gg/Tq24WXE")
 .setDescription(`

**!yardım**, ile yardım alabilirsiniz.
Örnek komut kullanımı: \`!koruma\`
 Bot Yapımcısı : Jenn
`)

 
 .addField("!koruma ", 
`<:660382504934703105:764163501493059615> Sunucunuza Rol ve Kanal koruması kurar. `)

 
 .addField("!küfür-engel ", 
`<a:hayir:764156427367088138> Sunucunuzda küfür  kullanımını yasaklar.`)
 

.addField("!reklam-engel ", 
`<a:hayir:764156427367088138> Sunucunuzda reklam yapılmasını yasaklar.`)

 
 .addField("!casplock-engel ", 
`<a:hayir:764156427367088138> Sunucunuzda CapsLock kullanımını azaltır.`)

.addField("!reklam-kick ", 
`<a:ayarlar:764156662914613259> Sunucunuzda 3 reklam yapan kullanıcıyı 3 kez uyarır sonra kickler ve sunucunuza tekrar gelip devam ederse ban yer.`)

 .addField("!herkese-rol-ver @rol / !hrv @rol  ", 
`:hammer_pick: Sunucunuzda bulunan tüm üyelere belirtilen rolü verir.`)

.addField("!reklam-taraması ", 
`<a:ayarlar:764156662914613259>Sunucunuzda isminde ve durumunda reklam olan kullanıcıları belirtir.`)


 .addField("!jail @üye ", 
`:briefcase: Sunucunuza sistem kurulduktan sonra (bot sahibi yapabilir) belirtilen üyeyi jaile atar.`)

.addField("!sil ", 
`:briefcase: Belirtilen kadar mesaj siler. En fazla 100 mesaj silebilir.`)

 .addField("!bakım ", 
`<a:ayarlar:764156662914613259> Botu bakıma alır ve komut kullanımlarını kapatır. Not : Bot sahibine özeldir.`)
 
 .setFooter("Seltius ", client.user.avatarURL)
 message.channel.send(Embed)
}

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["yardım","help","h","help","y"],
  permLevel: 0
};

module.exports.help = {
  name: 'yardım',
  description: 'Yardım Menüsünü Gösterir.',
  usage: 'yardım'
};
//Bu altyapı TlhaMert youtube kanalına aittir çalınmış ise lütfen info@doxybot.xyz adresine mail atın.
