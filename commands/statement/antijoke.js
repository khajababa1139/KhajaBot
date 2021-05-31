const memer = require('random-jokes-api')
const Discord = require('discord.js') 


module.exports = {
  name: 'antijoke',
  decription: 'Darker as it can get',
  
  execute(client, message, args) {
    message.channel.send(memer.antijoke());
  }
}