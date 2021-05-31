const fetch = require('node-fetch');

const Discord = require('discord.js');

module.exports = {
    name: "covid",
    description: "Track a country or worldwide COVID-19 cases",

    async execute(client, message, args){
      
      message.react('📈')

        let countries = args.join(" ");

        const noArgs = new Discord.MessageEmbed()
        .setTitle('Missing arguments')
        .setColor(0xFF0000)
        .setDescription('Invalid command (ex: baba covid all || baba covid Canada)')
        .setTimestamp()

        if(!args[0]) return message.channel.send(noArgs);

        if(args[0] === "all"){
            fetch(`https://covid19.mathdro.id/api`)
            .then(response => response.json())
            .then(data => {
                let confirmed = data.confirmed.value.toLocaleString()
                let recovered = data.recovered.value.toLocaleString()
                let deaths = data.deaths.value.toLocaleString()

                const embed = new Discord.MessageEmbed()
                .setTitle(`Worldwide COVID-19 Stats 🌎`)
                .addField('☣️ Confirmed Cases', confirmed)
                .addField('✅ Recovered', recovered)
                .addField('💀 Deaths', deaths)

                message.channel.send(embed)
            })
        } else {
            fetch(`https://covid19.mathdro.id/api/countries/${countries}`)
            .then(response => response.json())
            .then(data => {
                let confirmed = data.confirmed.value.toLocaleString()
                let recovered = data.recovered.value.toLocaleString()
                let deaths = data.deaths.value.toLocaleString()

                const embed = new Discord.MessageEmbed()
                .setTitle(`🦠 COVID-19 Stats for **${countries}**`)
                .addField('☣️ Confirmed Cases', confirmed)
                .addField('🟢 Recovered', recovered)
                .addField('☠️ Deaths', deaths)

                message.channel.send(embed)
            }).catch(e => {
                return message.channel.send('Invalid country provided')
            })
        }
    }
}