const Discord = require('discord.js')
const fetch = require('node-fetch');

module.exports = {
  name: 'roast',
  description: 'roasts someone',
  
  async execute(client, message, args) {
    
    message.react('🤟')
    if(!message.mentions.users.size) { return message.channel.send('Invalid command. Try: roast @user');
    }
    const mentioned = message.mentions.users.first();
    if(!mentioned) return message.reply("No such user.");
    let msg = await message.channel.send("Fetching a roast...") 
    fetch('https://evilinsult.com/generate_insult.php?lang=en&type=json')
    .then(res => res.json())
    .then(json =>  {
      const roastEmbed = new Discord.MessageEmbed().setTitle(mentioned.tag + ` ${json.insult}`).setColor("RANDOM");
      msg.edit(roastEmbed);
    })
  }
}