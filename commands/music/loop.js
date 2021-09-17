const Discord = require('discord.js');

module.exports = {
    name: "loop",
    aliases: ['repeat'],
    description: "Loop current song",
    run: async (client, message, args) => {
        if(!message.member.voice.channel){
            return message.channel.send('❌ **Please join the voice channel!**');
        }
        if(client.distube.isPlaying(message) && message.member.voice.channel != message.guild.me.voice.channel){
            return message.channel.send('❌ **You are not in the same voice channel as I am!**')
        }
        const queue = client.distube.getQueue(message)
        if (!queue) {
            return message.channel.send(`**There is nothing playing!**`)
        }
        if(queue.repeatMode == 2){
            client.distube.setRepeatMode(message, 1)
            return message.channel.send('🔂 **Loop Enabled**')
        }
        if(queue.repeatMode == 1){
            client.distube.setRepeatMode(message, 0)
            return message.channel.send('❌ **Disabled Loop**')
        }
        if(queue.repeatMode == 0){
            client.distube.setRepeatMode(message, 1)
            return message.channel.send('🔂 **Loop Enabled**')
        }
    }
}