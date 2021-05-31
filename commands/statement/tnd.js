const memer = require('random-jokes-api')

module.exports = {
  name: 'tnd',
  description: 'Plays truth and dare',
  aliases: ['truthndare'],
  
  execute(client, message, args) {
    
    if(!args.length) {
      return message.reply('What do you wanna play? Truth or Dare.\nType \'baba tnd truth/dare\' to proceed.')
    }
    if(args[0] === 'truth') {
    message.channel.send(memer.truth());
    } else if(args[0] === 'dare') {
      message.channel.send(memer.dare());
    }
  }
}