const Discord = require('discord.js');
const { Canvas } = require('canvacord');

module.exports = {
	name: 'triggered',
	decription: 'Triggers someone',

	async execute(client, message, args) {
	  
	  message.react('👿')
		if (!message.mentions.users.size) {
			const image = await Canvas.trigger(
				message.author.displayAvatarURL({ format: 'png' })
			);

			message.channel.send(new Discord.MessageAttachment(image, 'image.gif'));
		} else {
			const image = await Canvas.trigger(
				message.mentions.users.first().displayAvatarURL({ format: 'png' })
			);
			message.channel.send(new Discord.MessageAttachment(image, 'image.gif'));
		}
	}
};
