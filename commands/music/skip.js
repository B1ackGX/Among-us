const Discord = require('discord.js');

module.exports = {
    name: "skip",
    aliases: ['s'],
    description: "skip the current song!",
    async run (client, message, args) {
        if(!message.member.voice.channel){
            return message.channel.send('❌ **Please join the voice channel!**');
        }
        if(client.distube.isPlaying(message) && message.member.voice.channel != message.guild.me.voice.channel){
            return message.channel.send('❌ **You are not in the same voice channel as I am!**')
        }
        const queue = client.distube.getQueue(message)
        if (!queue) 
        return message.channel.send(`❌ **There is nothing in the queue right now!**`)
            client.distube.skip(message)
            message.channel.send(`⏩ **Skipped!**`)
    }
}