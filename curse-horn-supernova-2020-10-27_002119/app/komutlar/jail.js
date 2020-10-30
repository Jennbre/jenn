const Discord = require('discord.js');
const db = require("quick.db")
exports.run = async (client, message, args) => {
 if(db.fetch(`bakim`)) return message.channel.send('Şuanda Bakım Modu Açıktır.')
 if (!message.member.roles.has('733696760769282148') ) return message.channel.sendEmbed(new Discord.RichEmbed().setDescription('Bu komutu kullanabilmek için gerekli yetkiye sahip değilsin!') .setColor("random"));
  let kullanıcı = message.mentions.users.first()
  if (!kullanıcı) return message.channel.sendEmbed(new Discord.RichEmbed() .setDescription('Bir üye etiketlemen gerekiyor!').setColor("Black"));
  let user = message.mentions.users.first();
  let rol = message.mentions.roles.first()
  let member = message.guild.member(kullanıcı)
   let reason = args.slice(1).join(" ")
      if(!reason) return message.channel.send("Lütfen Bir Sebep Yazınız.").then(m => m.delete(5000));
          message.react("764156662575398983");
  message.guild.members.get(member.id).roles.forEach(r => {
message.guild.members.get(member.id).removeRole(r) 

   
})
  member.addRole('763476340905082911')
     const kanal = message.guild.channels.find(c => c.id == "765518944772554772") 
    const embed1 = new Discord.RichEmbed() 
    .setDescription(`${kullanıcı} Kişisi **${reason}** Sebebiyle Jaile Atıldı!`)
    .setColor("RED")
    .setFooter(message.author.tag , message.author.avatarURL)
    .setTimestamp()
  
  
  let embed = new Discord.RichEmbed() 
  .setDescription(`${kullanıcı} Adlı Kişisine <@&763476340905082911>  Rolü Verildi! \n Sebeb: **${reason}** `) 
  .setImage('')
  .setFooter(`A G S T E R İ O BodyGuard ...`)
  .setTimestamp()
  return message.channel.send(embed).then(kanal.send(embed1)).then(m => m.delete(5000000));
  
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["ceza","cezalandır"],
  kategori: "Yetkili Komutları",
  permLevel: 0
}

exports.help = {
  name: 'jail',
  description: "Etiketlenen kişinin tüm rollerini alıp jail'e atar.",
  usage: '!jail @etiket Sebebi'
}