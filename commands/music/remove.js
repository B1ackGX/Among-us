const Discord = require('discord.js');

module.exports = {
    name: "remove",
    description: "Loop current queue",
    run: async (client, message, args) => {
        var queueN = `${args}`
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
        if(isNaN(queueN) || !queueN){
            return message.channel.send(new Discord.MessageEmbed()
                .setDescription('❌ **Invalid Usage**')
                .addField("\u200B", ".remove [index]")
                .addField("\u200B", "Example: \`.remove 1\`")
                .setColor('RED')
            )
        }
        if(queueN > queue.songs.length) {
            return message.channel.send(new Discord.MessageEmbed()
                .setDescription('❌ **Invalid Usage**')
                .addField("\u200B", ".remove [index]")
                .addField("\u200B", "Example: \`.remove 1\`")
                .setColor('RED')
            )
        }else {
            message.channel.send(`:white_check_mark:  **Removed** \`${queue.songs[queueN].name}\``)
            return queue.songs.splice(queueN, 1);
        }
    }
}