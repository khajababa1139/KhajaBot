const Discord = require('discord.js');

module.exports = {
	name: 'ping',
	description: 'Ping!Shows some cool numbers.',
	execute(client, message) {
		
		message.react('⏱')
		message.channel.send(`📡\nWebsocket heartbeat: ${client.ws.ping}ms.\nCalculating path...`).then(sent => {
	sent.reply(`Roundtrip time: ${sent.createdTimestamp - message.createdTimestamp}ms`);
});
		
		
	},
};