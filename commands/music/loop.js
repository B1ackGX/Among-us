const Discord = require('discord.js');

module.exports = {
    name: "loop",
    aliases: ['repeat'],
    description: "Loop current song",
    run: async (client, message, args) => {
        const queue = client.distube.getQueue(message)
        if (!queue) return message.channel.send(`**There is nothing playing!**`)
        if(client.distube.setRepeatMode(message, 2)){
            client.distube.setRepeatMode(message, 1)
            message.channel.send('🔂 **Loop Enabled**')
        }
        if(client.distube.setRepeatMode(message, 0)){
            client.distube.setRepeatMode(message, 1)
            message.channel.send('🔂 **Loop Enabled**')
        }
        else{
            client.distube.setRepeatMode(message, 0)
            message.channel.send('🔂 **Disabled**')
        }
    }
}