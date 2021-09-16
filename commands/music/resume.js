const Discord = require('discord.js');

module.exports = {
    name: "resume",
    aliases: ['unpause'],
    description: "stop playing the song!",
    run: async (client, message, args) => {
        const queue = client.distube.getQueue(message)
        if(!queue){
            message.channel.send('❌ **There is nothing in the queue right now!**')
        }
        if(client.distube.isPlaying(message) === true){
            message.channel.send('❌ **It is not on pause!**')
        } else {
        client.distube.resume(message)
        message.channel.send('⏯ **Resuming**')
        }
    }
}