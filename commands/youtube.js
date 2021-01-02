module.exports = {
    name: 'youtube',
    description: 'sends the youtube link',
    execute(message, args){
        message.channel.send('https://www.youtube.com/channel/UC5CBocGMpVL_lkjlG36RjUA');
    }
}