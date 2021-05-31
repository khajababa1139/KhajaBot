const { chatBot } = require("reconlx")

module.exports = {
  name:"chat",
  decription: "Chats with you",
  aliases: ['c'],
  
  async execute (client, message, args) {
    
    chatBot(message, args.join(" "))
    
  }
}