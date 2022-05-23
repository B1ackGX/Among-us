const Discord = require('discord.js');

module.exports = {
    name: "pause",
    aliases: ['stop'],
    description: "stop playing the song!",
    run: async (client, message, args) => {
        const queue = client.distube.getQueue(message);
        if(!message.member.voice.channel){
            return message.channel.send('❌ **Please join a voice channel!**');
        }
        if(!queue){
            return message.channel.send('❌ **There is nothing in queue right now!**');
        }
        if(queue.pause){
            return message.channel.send('❌ **It is already paused!**');
        }
        queue.pause();
        message.channel.send("**Paused** ⏸️");
    }
};