const ms = require('ms');
module.exports = {

    name: 'mute',
    description: "This command mutes a member",
    execute(message, args){
        const target = message.mentions.users.first();
        if(target){
            let mainRole = message.guild.roles.cache.find(role => role.name === 'Member');
            let muteRole = message.guild.roles.cache.find(role => role.name === 'Mute');

            let memberTarget = message.guild.members.cache.get(target.id);

            if(!args[1]){
                memberTarget.roles.remove(mainRole.id);
                memberTarget.roles.add(muteRole.id);
                message.channel.send(`<@${memberTarget.user.id}> has been muted`);
                return;
            }

            memberTarget.roles.remove(mainRole.id);
            memberTarget.roles.add(muteRole.id);
            message.channel.send(`<@${memberTarget.user.id}> has been muted for ${ms(args[1])}`);

            setTimeout(function(){
                memberTarget.roles.remove(mainRole.id);
                memberTarget.roles.add(muteRole.id);
            }, ms(args[1]));

        }else{
            message.channel.send('Cant find that member!');
        }
    }
}