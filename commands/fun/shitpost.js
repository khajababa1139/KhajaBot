const Discord = require("discord.js");
const randomPuppy = require('random-puppy');


module.exports = {
  name: "shitpost",
  description : "Baba sends a shitpost",
  
  async execute(client, message, args){
       
    const img = await randomPuppy('shitpost');
    const embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setImage(img)
    .setTitle(`From /r/shitpost`)
    .setURL(`https://reddit.com/r/shitpost`);
    
    message.channel.send(embed);
  }
}
  