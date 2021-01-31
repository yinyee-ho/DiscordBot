module.exports = {
    name: 'ban',
    description: "This command bans a member",
    execute(messages, args){
        const member = message.mentions.users.first();
        if(member){
            const memberTargert = message.guild.members.cache.get(member.id);
            memberTargert.ban();
            message.channel.send("User has been banned");
        }else{
            message.channel.send("You couldn't ban the member");
        }
    }
}