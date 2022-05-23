const Discord = require('discord.js');

module.exports = {
    name: "resume",
    aliases: ['unpause'],
    description: "stop playing the song!",
    run: async (client, message, args) => {
        if(!message.member.voice.channel){
            return message.channel.send('❌ **Please join the voice channel!**');
        }
        if(client.distube.playing && message.member.voice.channel != message.guild.me.voice.channel){
            return message.channel.send('❌ **You are not in the same voice channel as I am!**');
        }
        const queue = client.distube.getQueue(message);
        if(!queue){
            message.channel.send('❌ **There is nothing in the queue right now!**');
        }
        if(client.distube.isPlaying(message) === true){
            message.channel.send('❌ **It is not on pause!**');
        } 
        queue.resume();
        message.channel.send('⏯ **Resuming**');
    }
};