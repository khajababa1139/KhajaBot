const SnakeGame = require('snakecord');
const Discord = require("discord.js");

const snakeGame = new SnakeGame({
   title: 'Snake Game',
   color: "PURPLE",
   timestamp: true,
   gameOverTitle: "You suk lol..."
});

module.exports = {
  name: 'snake',
  description: 'Plays a snake game.',
  aliases: ['snkgame'],
  
  execute(client, message, args) {
    return snakeGame.newGame(message);
  }
}