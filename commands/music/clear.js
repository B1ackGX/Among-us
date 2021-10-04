const Discord = require('discord.js');

module.exports = {
    name: "clear",
    description: "clear the whole queue",
    run: async (client, message, args) => {
        const queue = client.distube.getQueue(message)
        if(!message.member.voice.channel){
            return message.channel.send('❌ **Please join the voice channel!**');
        }
        if (!message.guild.me.voice.channel) {
            message.channel.send('❌ **I am not connected to a voice channel.** \`Use .join to get me in\`')
        }
        if(client.distube.isPlaying(message) && message.member.voice.channel != message.guild.me.voice.channel){
            return message.channel.send('❌ **You are not in the same voice channel as I am!**')
        }
        if (!queue) {
            return message.channel.send(`**There is nothing playing!**`)
        }
        let test = queue.songs.splice(queue.songs.length, 0)
        console.log(test)
        message.channel.send(`💥 **Cleared...** ⏹️`)
    }
}