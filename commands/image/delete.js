const Discord = require('discord.js');
const { Canvas } = require('canvacord');

module.exports = {
	name: 'delete',
	decription: 'deletes someone',

	async execute(client, message, args) {
	  
	  message.react('😵')
		if (!message.mentions.users.size) {
			const image = await Canvas.delete(
				message.author.displayAvatarURL({ format: 'png' })
			);
			message.channel.send(new Discord.MessageAttachment(image, 'image.png'));
		} else {
			const image = await Canvas.delete(
				message.mentions.users.first().displayAvatarURL({ format: 'png' })
			);
			message.channel.send(new Discord.MessageAttachment(image, 'image.png'));
		}
	}
};
