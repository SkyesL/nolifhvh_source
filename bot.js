const Discord = require('discord.js');

const client = new Discord.Client();

client.on('ready', () => {
  console.log('i am ready!');
});

client.on('message', message => {
  if (!message.guild) return;

  if (message.content.startsWith('+kick')) {
    const user = message.mentions.users.first();
    if (user) {
      const member = message.guild.member(user);
      if (member) {
        member.kick('Optional reason that will display in the audit logs').then(() => {
          message.channel.send(`Poprawnie wyrzuciłem ${user.tag}`);
        }).catch(err => {
          message.channel.send('Nie mogłem wyrzucić użytkownika');
          console.error(err);
        });
      } else {
        message.channel.send('Ten użytkownik nie jest w gildi');
      }
    } else {
      message.channel.send('Nie wybrałeś użytkownika do wyżucenia np. kick @tag');
    }
  }
});

client.on('message', msg=>{
  if (msg.content ===  "+help") {
      msg.channel.send('```Lista komend:```');
      msg.channel.send('**+kick**');
      msg.channel.send('**+pomoc**')

  }
});
client.on('message', msg=>{
  if (msg.content === "+pomoc") {
      msg.channel.send('```Jeśli kick nie działa lub bot szfankuje napisz do mnie! secret-re$ident#1972, Ale gdy bot nie może wyrzucić, musi mieć permisje administratora, jeśli nie działa to urzytkownik ma wyższe permissje```')

  }
});

client.login('NTk0Nzk1NTY0NzA1Nzc1NjIw.XRhqnw.WO57fFaIsWnd03FktlJwqoUYBl8');
