const Discord = require('discord.js');
const { Canvas } = require('canvacord');

module.exports = {
	name: 'hitler',
	decription: 'sieg heil',

	async execute(client, message, args) {
	  
	  message.react('☣️')
		if (!message.mentions.users.size) {
			const image = await Canvas.hitler(
				message.author.displayAvatarURL({ format: 'png' })
			);
			message.channel.send(new Discord.MessageAttachment(image, 'image.png'));
		} else {
			const image = await Canvas.hitler(
				message.mentions.users.first().displayAvatarURL({ format: 'png' })
			);
			message.channel.send(new Discord.MessageAttachment(image, 'image.png'));
		}
	}
};
