const Discord = require('discord.js');
const { Canvas } = require('canvacord');

module.exports = {
	name: 'slap',
	decription: 'slap someone xD',

	async execute(client, message, args) {
	  
	  message.react('✋')
		if (!message.mentions.users.size) {
			const image = await Canvas.slap(
				client.user.displayAvatarURL({ format: 'png' }),
				message.author.displayAvatarURL({ format: 'png' })
			);
			message.channel.send(new Discord.MessageAttachment(image, 'image.png'));
		} else {
			const image = await Canvas.slap(
				message.author.displayAvatarURL({ format: 'png' }),
				message.mentions.users.first().displayAvatarURL({ format: 'png' })
			);

			message.channel.send(new Discord.MessageAttachment(image, 'image.png'));
		}
	}
};
