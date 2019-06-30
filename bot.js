const Discord = require('discord.js');

const client = new Discord.Client();

client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', message => {
  if (!message.guild) return;

  if (message.content.startsWith('+kick')) {
    const user = message.mentions.users.first();
    if (user) {
      const member = message.guild.member(user);
      if (member) {
        member.kick('Optional reason that will display in the audit logs').then(() => {
          message.reply(`Successfully kicked ${user.tag}`);
        }).catch(err => {
          message.reply('I was unable to kick the member');
          console.error(err);
        });
      } else {
        message.reply('That user isn\'t in this guild!');
      }
    } else {
      message.reply('You didn\'t mention the user to kick!');
    }
  }
});

client.on('message', msg=>{
  if (msg.content ===  "+help") {
      msg.channel.send('**Lista komend:**');
      msg.channel.send('**+kick**');
  }
});

client.login('NTk0Nzk1NTY0NzA1Nzc1NjIw.XRhqnw.WO57fFaIsWnd03FktlJwqoUYBl8');
