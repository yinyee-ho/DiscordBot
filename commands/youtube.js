module.exports = {
    name: 'youtube',
    description: 'sends the youtube link',
    execute(message, args){


        let role = message.guild.roles.cache.find(r => r.name === "Mod");

        // if(message.member.permissions.has("BAN_MEMBERS")){
        //     message.channel.send('You have the permission to ban members');
        // } else {
        //     message.channel.send('You do not have the permission to ban members');  
        // }

        if(message.member.roles.cache.some(r => r.name === "Mod")){
            message.channel.send('https://www.youtube.com/channel/UC5CBocGMpVL_lkjlG36RjUA');


        } else {
            message.channel.send('I see you do not have the correct permission, let me changet that... :D');
            message.member.roles.add(role).catch(console.error);
        }

    }
}