const Discord = require('discord.js');
const bot = new Discord.Client(); 

const token = 'Nzk0NTMzNTg2MTU3Njk5MDgy.X-8NEA.K-TL8FAjp2G39lDX9LMjmDhoi5k';

bot.on('ready', () => {
    console.log('This bot is online!');
})

bot.on('message', msg=>{
    if(msg.content === "HELLO"){
        msg.reply('HELLO FRIEND!');
    }
})

bot.login(token);