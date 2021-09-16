const Discord = require('discord.js');

module.exports = {
    name: "join",
    aliases: ['connect'],
    description: "connect!",
    run: async (client, message, args) => {
        if(!message.member.voice.channel)
            return message.channel.send('❌ **Please join a voice channel!**');
        if(message.member.voice.channel){
            message.member.voice.channel.join()
            return message.channel.send(`👍 **Joined** \`${message.member.voice.channel.name}\` `)
        }
    }
}