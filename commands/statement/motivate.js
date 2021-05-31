const Discord = require('discord.js')
const fetch = require('node-fetch');

module.exports = {
  name: 'motivate',
  description: 'motivates someone',
  
  async execute(client, message, args) {
    
    message.react('🕯')
      function getQuote() {
	return fetch('https://zenquotes.io/api/random')
		.then(res => {
			return res.json();
		})
		.then(data => {
			return data[0]['q'] + ' -' + data[0]['a'];
		});
}
    
		getQuote().then(quote => message.channel.send(quote));

  }
}