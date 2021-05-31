const Discord = require('discord.js');
const fetch = require('node-fetch');
const keepalive = require('./server');
const Database = require('@replit/database');
const client = new Discord.Client();
const fs = require('fs');
const { join } = require('path');
const { Player } = require('discord-player');




client.player = new Player(client);
client.commands = new Discord.Collection();

const cooldowns = new Discord.Collection();

const commandFolders = fs.readdirSync('./commands');

for (const folder of commandFolders) {
	const commandFiles = fs
		.readdirSync(`./commands/${folder}`)
		.filter(file => file.endsWith('.js'));
	for (const file of commandFiles) {
		const command = require(`./commands/${folder}/${file}`);
		client.commands.set(command.name, command);
	}
}

const prefix = 'baba ';
// unique prefix

client.on('ready', () => {
	console.log('READY TO ROLL');
  client.user.setPresence({ activity: { name: 'with KhajaBaba💦' }, status: 'idle' });
});



client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;
  if(message.channel.type === 'dm') return message.reply('I ain\'t yo personal bot');
  
	const args = message.content
		.slice(prefix.length)
		.trim()
		.split(/ +/);
		
const commandName = args.shift().toLowerCase();

	const command = client.commands.get(commandName)
		|| client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));	
		
		
  if (!command) return;
  
  if (command.args && !args.length) {
		let reply = `No arguments provided man, ${message.author}!`;

		if (command.usage) {
			reply += `\nThe proper usage would be: \`${prefix}${command.name} ${command.usage}\``;
		}
				return message.channel.send(reply);
	}
	
	try{
  	command.execute(client, message, args);
	} catch (error) {
		console.error(error);
		message.reply('Oops, there was an error trying to execute that command!');
	}
});

keepalive();
const mySecret = process.env['TOKEN'];
client.login(mySecret);
