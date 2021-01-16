const Discord = require('discord.js');

const client = new Discord.Client(); 

const token = ''; // add token

const prefix = '-';

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.on('ready', () => {
    console.log('This bot is online!');
})

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    
    const args = message.content.slice(prefix.length).split(/ + /);
    const command = args.shift().toLowerCase();

    if(command === 'command'){
        client.commands.get('command').execute(message, args, Discord);
    }

    if(command === 'ping'){
        client.commands.get('ping').execute(message,args);
    } else if (command == 'youtube') {
        client.commands.get('youtube').execute(message,args);
    } 
})

client.login(token);
