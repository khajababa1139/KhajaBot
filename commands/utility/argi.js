module.exports = {
  name: 'argi',
  
  execute(client, message, args) {
    if(message.author.id != '592787640529715222') 
    {
      message.reply("This is a prototype command and you are not allowed to use it... :'(")
    }
    else {
      message.reply('bruh');
    }
  }
}