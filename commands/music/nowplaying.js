const Discord = require('discord.js');
const progressbar = require('string-progressbar')



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

        
        var total = queue.songs[0].formattedDuration.toString();
        var current = queue.formattedCurrentTime

        const splitbar = progressbar.splitBar(total, current)
        

        const embed = new Discord.MessageEmbed()
        .setTitle('**Now Playing** ♪')
        .setDescription(`[${queue.songs[0].name}](${queue.songs[0].url})`)
        .addField(`${splitbar}`, `\`${queue.formattedCurrentTime} / ${queue.songs[0].formattedDuration}\``)
        .setFooter(`\`Requested by:\` ${queue.songs[0].user.tag}`)
        message.channel.send(embed);
    }
}