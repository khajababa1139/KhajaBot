const Discord = require('discord.js');
const { Canvas } = require('canvacord');

module.exports = {
	name: 'pixelate',
	decription: '/)@/+)/#);+)$;+',

	async execute(client, message, args) {
	  
	  message.react('👾')
		if (!message.mentions.users.size) {
			const image = await Canvas.pixelate(
				message.author.displayAvatarURL({ format: 'png' }, args[1])
			);
			message.channel.send(new Discord.MessageAttachment(image, 'image.png'));
		} else {
			const image = await Canvas.pixelate(
				message.mentions.users.first().displayAvatarURL({ format: 'png' }, 1000)
			);
			message.channel.send(new Discord.MessageAttachment(image, 'image.png'));
		}
	}
};
