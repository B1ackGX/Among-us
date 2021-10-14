const Discord = require('discord.js');
const { toColonNotation, toMilliseconds } = require('colon-notation');

module.exports = {
    name: "seek",
    description: "Seek to a certain time of the song!",
    run: async (client, message, args) => {
        const queue = client.distube.getQueue(message)
        const time = args[0]
        const Time = toMilliseconds(time)
        if(!message.member.voice.channel)
            return message.channel.send('❌ **Please join a voice channel!**');
        if (!queue) 
            return message.channel.send(`❌ **There is nothing in the queue right now!**`)
        if(client.distube.isPlaying(message) && message.member.voice.channel != message.guild.me.voice.channel)
            return message.channel.send('❌ **You are not in the same voice channel as I am!**')
        if(!time || isNaN(time))
            return message.channel.send(new Discord.MessageEmbed()
                .setTitle('❌ **Invalid format**')
                .setDescription(`.seek 2:00`)
                .setColor('RANDOM')
            )
        client.distube.seek(Time)
        message.channel.send(`🎵 **Set position to** \`${time}\` ⏩`)
    }
}