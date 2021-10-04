const Discord = require('discord.js');

module.exports = {
    name: "clear",
    description: "clear the whole queue",
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
        let songs = queue.songs
        songs.splice(queue.songs.length)
        message.channel.send(`💥 **Cleared...** ⏹️`)
    }
}