// for an admin channel 

module.exports = {
    name: 'kick',
    description: "This command kicks a member",
    execute(message, args){
        const member = message.mentions.users.first();
        if(member){
            const memberTargert = message.guild.members.cache.get(member.id);
            memberTargert.kick();
            message.channel.send("User has been kicked");
        }else{
            message.channel.send("You couldn't kick the member");
        }
    }
}