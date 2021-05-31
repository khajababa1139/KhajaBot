const Discord = require("discord.js");
const { promptMessage } = require("./functions.js");

const chooseArr = ["🗻", "📰", "✂"];

module.exports = {
    name: "rps",
    description: "Rock Paper Scissors game. React to one of the emojis to play the game.",
    aliases: ['imbored'],
    
     async execute (client, message, args) {
        const embed = new Discord.MessageEmbed()
            .setTitle("Rock paper scissors- Commence!")
            .setColor("RANDOM")
            .setFooter(message.guild.me.displayName, client.user.displayAvatarURL)
            .setDescription("React to the designated emojis pls.")
            .setTimestamp();

        const m = await message.channel.send(embed);
        // Wait for a reaction to be added
        const reacted = await promptMessage(m, message.author, 30, chooseArr);

        // Get a random emoji from the array
        const botChoice = chooseArr[Math.floor(Math.random() * chooseArr.length)];

        // Check if it's a win/tie/loss
        const result = await getResult(reacted, botChoice);
        // Clear the reactions
        await m.reactions.removeAll();

        embed
            .setDescription("")
            .addField(result, `${reacted} vs ${botChoice}`);

        m.edit(embed);

        function getResult(me, clientChosen) {
            if ((me === "🗻" && clientChosen === "✂") ||
                (me === "📰" && clientChosen === "🗻") ||
                (me === "✂" && clientChosen === "📰")) {
                    return "I have lost 😔!";
            } else if (me === clientChosen) {
                return "Draw it is 🤨!";
            } else {
                return "I won xD!";
            }
        }
    }
}
