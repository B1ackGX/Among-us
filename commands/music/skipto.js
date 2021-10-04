const Discord = require('discord.js');

module.exports = {
    name: "skipto",
    aliases: ['st'],
    description: "skip to certain song!",
    async run (client, message, args) {
        const qo = parseInt(args[0])
        if(!message.member.voice.channel){
            return message.channel.send('❌ **Please join the voice channel!**');
        }
        if (!message.guild.me.voice.channel) {
            message.channel.send('❌ **I am not connected to a voice channel.** \`Use .join to get me in\`')
        }
        if(client.distube.isPlaying(message) && message.member.voice.channel != message.guild.me.voice.channel){
            return message.channel.send('❌ **You are not in the same voice channel as I am!**')
        }
        const queue = client.distube.getQueue(message)
        if (!queue) 
            return message.channel.send(`❌ **There is nothing in the queue right now!**`)
        if (!qo){
            return message.channel.send('❌ **Plese give me a song number!**')
        }
        message.channel.send(`⏩ **Skipped to** \`${queue.songs[qo].name}\``)
        client.distube.jump(message, qo);
    }
}