const { tictactoe } = require('reconlx');

module.exports = {
  name: 'tictactoe',
  description: 'plays the game tictactoe',
  aliases: ['ttt'],
  
  async execute(client, message, args) {
    const member = message.mentions.users.first();
    if(!member) return message.channel.send('Who u wanna play with?')
    
    new tictactoe({
      player_two: member,
      message: message
    })
  }
}