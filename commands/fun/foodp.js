const Discord = require("discord.js");
const randomPuppy = require('random-puppy');

module.exports = {
  name: "foodp",
  description : "Baba খানা দে",
  aliases: ['food', 'hungry'],
  
  async execute(client, message, args){
   
    const img = await randomPuppy('FoodPorn');
    const embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setImage(img)
    .setTitle(`From /r/FoodPorn`)
    .setURL(`https://reddit.com/r/FoodPorn`);
    
    message.channel.send(embed);
  }
}
  