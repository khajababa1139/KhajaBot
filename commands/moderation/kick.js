const Discord = require('discord.js');

module.exports = {
  name: 'kick',
  description: 'kick a guy',
  aliases: ['lathide'],
  
  execute(client, message, args) {
    if (!message.mentions.users.size) {
			return message.reply('you need to tag a user in order to kick them!');
		} else if(message.channel.type === "dm") { return message.reply('I can not kick someone in dm, retard');
		} else if (message.author.id === "592787640529715222")
		{
    const member = message.mentions.members.first();
    message.channel.send(`You kicked: ${member}`);
    member.kick();
		}
		else return message.reply("Fk off. You are not allowed to kik somebody");
  }
}
