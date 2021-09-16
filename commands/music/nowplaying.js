const Discord = require('discord.js');
const progressbar = require('string-progressbar')
const { toColonNotation } = require('colon-notation')

module.exports = {
    name: "nowplaying",
    aliases: ['np'],
    description: "Check the current queue!",
    run: async (client, message, args) => {
        const queue = client.distube.getQueue(message)
        if (!queue) return message.channel.send(new Discord.MessageEmbed()
        .setTitle(`**Queue for ${message.guild}**`)
        .setDescription('Nothing Playing!')
        );
        
    }
}