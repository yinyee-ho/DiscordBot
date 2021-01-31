const Discord = require('discord.js');

const client = new Discord.Client(); 

// add token
const token = 'Nzk0NTMzNTg2MTU3Njk5MDgy.X-8NEA.n1r2Rbu7KpDFAO0hDjVIsMFOQAY';

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

client.on('guildMemberAdd', guildMember =>{
    let welcomeRole = guildMember.guild.roles.cache.find(role => role.name === 'Member');

    guildMember.roles.add(welcomeRole);
    guildMember.guild.channels.cache.get('805278692937826374').send(`Welcome <@${guildMember.user.id}> to our server! Make sure to check out the rule text channel. :)`);
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
    } else if (command === 'youtube') {
        client.commands.get('youtube').execute(message,args);
    } else if (command === 'kick'){
        client.commands.get('kick').execute(message,args);
    } else if (command === 'ban'){
        client.commands.get('kick').execute(message,args);       
    } else if (command === 'mute'){
        client.commands.get('mute').execute(message,args); 
    } else if (command === 'unmute'){
        client.commands.get('unmute').execute(message,args); 
    }
})

client.login(token);