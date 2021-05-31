const Discord = require('discord.js');
const { Canvas } = require('canvacord');

module.exports = {
	name: 'bed',
	decription: 'why hate me bro',

	async execute(client, message, args) {
	  
	  message.react('🛌')
		if (!message.mentions.users.size) {
			message.channel.send("Bed who...");
		} else {
			const image = await Canvas.bed(message.author.displayAvatarURL({format: "png"}),
				message.mentions.users.first().displayAvatarURL({ format: 'png' })
			);
			message.channel.send(new Discord.MessageAttachment(image, 'image.png'));
		}
	}
};
