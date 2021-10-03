const Discord = require('discord.js');
const progressbar = require('string-progressbar');
const { toColonNotation, toMilliseconds } = require('colon-notation');

module.exports = {
    name: "nowplaying",
    aliases: ['np', 'nowplay'],
    description: "Check the current queue!",
    run: async (client, message, args) => {
        const queue = client.distube.getQueue(message)
        if (!queue) return message.channel.send(new Discord.MessageEmbed()
        .setTitle(`**Queue for ${message.guild}**`)
        .setDescription('Nothing Playing!')
        );

        
        var total = toMilliseconds(queue.songs[0].formattedDuration)
        var current = toMilliseconds(queue.formattedCurrentTime)

        const splitbar = progressbar.splitBar(total, current, 20);
        

        const embed = new Discord.MessageEmbed()
        .setTitle('**Now Playing** ♪')
        .setThumbnail(`${queue.songs[0].thumbnail}`)
        .setDescription(`[${queue.songs[0].name}](${queue.songs[0].url})`)
        .addField(`${splitbar[0]}`, `\`${queue.formattedCurrentTime} / ${queue.songs[0].formattedDuration}\``)
        .addField('\`Requested by:\` ' + queue.songs[0].user.tag)
        message.channel.send(embed);
    }
}