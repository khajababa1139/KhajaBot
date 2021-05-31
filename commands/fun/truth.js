const Discord = require("discord.js");
const randomPuppy = require('random-puppy');


module.exports = {
  name: "truth",
  description : "Baba sends a truth",
  
  async execute(client, message, args){
       
    const subReddits = ["technicallythetruth"];
    const random = subReddits[Math.floor(Math.random() * subReddits.length)];
    
    const img = await randomPuppy(random);
    const embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setImage(img)
    .setTitle(`From /r/${random}`)
    .setURL(`https://reddit.com/r/${random}`);
    
    message.channel.send(embed);
  }
}
  