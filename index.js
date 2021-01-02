const Discord = require('discord.js');

const client = new Discord.Client(); 

const prefix = '-';

client.on('ready', () => {
    console.log('This bot is online!');
})

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    
    const args = message.content.slice(prefix.length).split(/ + /);
    const command = args.shift().toLowerCase();

    if(command === 'ping'){
        message.channel.send('pong!');
    } else if (command == 'youtube') {
        message.channel.send('https://www.youtube.com/channel/UC5CBocGMpVL_lkjlG36RjUA');
    }
    // TODO: add more commands 
})

client.login(token);
