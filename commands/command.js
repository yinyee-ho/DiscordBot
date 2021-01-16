module.exports = {
    name: 'command',
    description: "Embeds!",
    execute(message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#304281')
        .setTitle('Rules')
        .setURL('https://youtube.com')
        .setDescription('This is an embed for the server rules')
        .addFields(
            {
                name: 'Rule 1',
                value: 'Be nice'
            }, 
            {
                name: 'Rule 2',
                value: 'Be empathetic'
            } ,
            {
                name: 'Rule 3',
                value: 'No corona'
            }
        )
        .setImage('https://pd-beamliving-cd.beamliving.com/-/media/bu-to-ch/cat-netflix-chill-meme-2.jpg?h=600&la=en&w=1380')
        .setFooter('Make sure to check out the rules channel');
        message.channel.send(newEmbed);
    }

    
}