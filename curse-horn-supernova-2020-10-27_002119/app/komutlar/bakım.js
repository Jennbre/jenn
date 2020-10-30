const Discord = require('discord.js')
const db = require('quick.db')
exports.run = (client, message, args) => {
  
  if(message.author.id != "299978265420890113") return
  
  if(!args[0]) return message.channel.send('Bakım modunu açmak için !bakım aç')
  
  if(args[0] === 'aç') {
    if(db.fetch(`bakim`)) return message.channel.send('Bakım modu zaten açık')
    message.channel.send('Bakım modu açıldı.')
    db.set(`bakim`, 'acik')
    message.react("764156427228020766");
  }
  if(args[0] === 'kapat'){
    if(!db.fetch(`bakim`)) return message.channel.send('Bakım modu zaten kapalı.')
    message.channel.send('Bakım modu kapatıldı.')
    db.delete(`bakim`)
    message.react("764156427228020766");
  }
  
}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}
exports.help = {
  name: 'bakım'
}//Bu altyapı TlhaMert youtube kanalına aittir çalınmış ise lütfen info@doxybot.xyz adresine mail atın.
