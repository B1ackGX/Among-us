const Discord = require('discord.js');

module.exports = {
    name: "queue",
    aliases: ['q'],
    description: "Check the current queue!",
    run: async (client, message, args) => {
        const queue = client.distube.getQueue(message)
        if (!queue) return message.channel.send(new Discord.MessageEmbed()
        .setTitle(`**Queue for ${message.guild}**`)
        .setDescription('Nothing Playing!')
        );
        const NP = queue.songs[0]
        const CQ =  `__Now Playing:__\n**[${queue.songs[0].name}](${queue.songs[0].url})\n\`${queue.songs[0].formattedDuration} Requested by: ${queue.songs[0].user.tag}\``
        for(let i = 1; i < queue.songs.length; i++){
            description += `**${i}.** [${queue.songs[i].name}](${queue.songs[i].url}) | \`${queue.songs[i].formattedDuration}Requested by: ${queue.songs[i].user.tag}\`\n`
            if (queue) return message.channel.send(new Discord.MessageEmbed()
                .setTitle(`**Queue for ${message.guild}**`)
                .addField(
                { name: CQ},
                { name: '\u200B', value: '\u200B' },
                { name: description}
            )
        );
        }
        
    }
}