const Discord = require('discord.js');
const fs = require('fs');
const prefix = 'baba';

module.exports = {
	name: 'help',
	description: 'Shows all commands',
	execute(client, message, args) {
		if (!args.length) {
				let categories = [];

				fs.readdirSync('./commands/').forEach(dir => {
					const commands = fs.readdirSync(`./commands/${dir}/`).filter(file =>
						file.endsWith('.js')
					);

					const cmds = commands.map(command => {
						let file = require(`../../commands/${dir}/${command}`);

						if (!file.name) return 'No command name.';

						let name = file.name.replace('.js', '');

						return `\`${name}\``;
					});

					let data = new Object();

					data = {
						name: dir.toUpperCase(),
						value: cmds.length === 0 ? 'In progress.' : cmds.join(' ')
					};

					categories.push(data);
				});

				const embed = new Discord.MessageEmbed()
					.setTitle('🐸 Need help? KhajaBot to the rescue:')
					.setImage('https://i.imgur.com/a7tn2dC.png?2')
					.addFields(categories)
					.setDescription(
						`Use \`baba help\` followed by a command name to get more additional information on a command. For example: \`baba help ban\`.`
					)
					.setFooter(
						`Requested by ${message.author.tag}`,
						message.author.displayAvatarURL({ dynamic: true })
					)
					.setTimestamp()
					.setColor('RANDOM');
				return message.channel.send(embed);
			}
		
		else {
      const command =
        client.commands.get(args[0].toLowerCase()) ||
        client.commands.find(
          (c) => c.aliases && c.aliases.includes(args[0].toLowerCase())
        );

      if (!command) {
        const embed = new Discord.MessageEmbed()
          .setTitle(`Invalid command😐!  Use \`${prefix} help\` for all of my commands...`)
          .setColor("FF0000");
        return message.channel.send(embed);
      }

      const embed = new Discord.MessageEmbed()
        .setTitle("Command Details:")
        .addField("PREFIX:", `\`${prefix}\``)
        .addField(
          "COMMAND:",
          command.name ? `\`${command.name}\`` : "No name for this command."
        )
        .addField(
          "ALIASES:",
          command.aliases
            ? `\`${command.aliases.join("` `")}\``
            : "No aliases for this command."
        )
        .addField(
          "USAGE:",
          command.usage
            ? `\`${prefix} ${command.name} ${command.usage}\``
            : `\`${prefix} ${command.name}\``
        )
        .addField(
          "DESCRIPTION:",
          command.description
            ? command.description
            : "No description for this command."
        )
        .setFooter(
          `Requested by ${message.author.tag}`,
          message.author.displayAvatarURL({ dynamic: true })
        )
        .setTimestamp()
        .setColor("RANDOM");
      return message.channel.send(embed);
    }
	}
};
