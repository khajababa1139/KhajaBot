const Discord = require('discord.js');

module.exports = {
	name: 'stats',
	description: 'Shows all member stats',
	aliases: ['online', 'status'],

	execute(client, message) {
	  message.guild.members.fetch().then(fetchedMembers => {
	const totalOnline = fetchedMembers.filter(member => member.presence.status === 'online');
	// Now you have a collection with all online member objects in the totalOnline variable
	message.reply(`There are currently ${totalOnline.size} members online in this guild!`)
});

}
}