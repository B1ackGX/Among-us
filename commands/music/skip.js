const Discord = require('discord.js');

module.exports = {
    name: "skip",
    aliases: ['s'],
    description: "skip the current song!",
    async run (client, message, args) {
        const queue = client.distube.getQueue(message)
        if (!queue) 
        return message.channel.send(`❌ **There is nothing in the queue right now!**`)
            client.distube.skip(message)
            message.channel.send(`⏩ **Skipped!**`)
    }
}