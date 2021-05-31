 const Discord = require('discord.js')
 
 
 module.exports = {
	name: 'server',
	description: 'Display info about this server.',
	aliases: ['server info', 'whereami'],
	
	execute(client, message, args) {
	  
	    message.react('💡')
	    message.channel.send(
			`Server name: ${message.guild.name}\nTotal members: ${
				message.guild.memberCount
			}\nServer Verification: ${message.guild.verified}\nServer region: ${
				message.guild.region
			}\nOwner : ${message.guild.owner}\nCreated at: ${message.guild.createdAt}`
		);
	},
};