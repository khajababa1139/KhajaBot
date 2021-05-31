const Discord = require('discord.js');
const { Canvas } = require('canvacord');

module.exports = {
	name: 'spank',
	decription: 'spank someone ;~;',

	async execute(client, message, args) {
	  
	  message.react('👏')
		if (!message.mentions.users.size) {
			const image = await Canvas.spank(
				client.user.displayAvatarURL({ format: 'png' }),
				message.author.displayAvatarURL({ format: 'png' })
			);
			message.channel.send(new Discord.MessageAttachment(image, 'image.png'));
		} else {
			const image = await Canvas.spank(
				message.author.displayAvatarURL({ format: 'png' }),
				message.mentions.users.first().displayAvatarURL({ format: 'png' })
			);

			message.channel.send(new Discord.MessageAttachment(image, 'image.png'));
		}
	}
};
