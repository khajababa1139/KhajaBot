const Discord = require("discord.js");
const randomPuppy = require('random-puppy');


module.exports = {
  name: "meme",
  description : "Baba sends a meme",
  
  async execute(client, message, args){
    
    const img = await randomPuppy('memes');
    const embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setImage(img)
    .setTitle(`From /r/memes`)
    .setURL(`https://reddit.com/r/memes`);
    
    message.channel.send(embed);
  }
}
  