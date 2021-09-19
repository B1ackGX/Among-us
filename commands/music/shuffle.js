const Discord = require('discord.js');

module.exports = {
    name: "shuffle",
    description: "Check the current queue!",
    run: async (client, message, args) => {
        const queue = client.distube.getQueue(message)
        if(!message.member.voice.channel){
            return message.channel.send('❌ **Please join a voice channel!**');
        }
        if(client.distube.isPlaying(message) && message.member.voice.channel != message.guild.me.voice.channel){
            return message.channel.send('❌ **You are not in the same voice channel as I am!**')
        }
        if (!queue) {
            return message.channel.send(`**There is nothing in the queue right now!**`)
        }
        client.distube.shuffle(message)
    }
}