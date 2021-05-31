const Discord = require("discord.js")
const { Canvas } = require('canvacord')

module.exports = {
  name: 'trash',
  description: 'Yo trash bruh',
  
  async execute(client, message, args) {
    
    message.react('🚮')
    if(!message.mentions.users.size) {
      const image = await Canvas.trash(message.author.displayAvatarURL({format: "png"}))
      message.channel.send(new Discord.MessageAttachment(image, "image.png"));
    }
    else {
      const image = await Canvas.trash(message.mentions.users.first().displayAvatarURL({format: "png"}));
      message.channel.send(new Discord.MessageAttachment(image, "image.png"))
    }
  }
}