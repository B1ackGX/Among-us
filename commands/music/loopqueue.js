const Discord = require('discord.js');

module.exports = {
    name: "loopqueue",
    aliases: ['lq'],
    description: "Loop current queue",
    run: async (client, message, args) => {
        const queue = client.distube.getQueue(message)
        if (!queue) return message.channel.send(`**There is nothing playing!**`)
        if(client.distube.setRepeatMode(message, 1)){
            return
        }
        if(client.distube.setRepeatMode(message, 0)){
            client.distube.setRepeatMode(message, 2)
            message.channel.send('🔄 **Loop Enabled**')
        }
        if(client.distube.setRepeatMode(message, 2)){
            client.distube.setRepeatMode(message, 0)
            message.channel.send('🔄 **Disabled**')
        }
    }
}