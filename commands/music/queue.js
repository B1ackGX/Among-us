const Discord = require('discord.js');
const pagination = require('discord.js-pagination');

module.exports = {
    name: "queue",
    aliases: ['q'],
    description: "Check the current queue!",
    run: async (client, message, args) => {
        const queue = client.distube.getQueue(message)
        if (!queue) return message.channel.send(new Discord.MessageEmbed()
        .setTitle(`**Queue for ${message.guild}**`)
        .setDescription(`__Now Playing:__\nNothing Playing!`)
        .setColor('RANDOM')
        );
        
        const pages = generateQueueEmbed(queue)
        
        function generateQueueEmbed(queue){
            const pages = []
            let k = 10;
            for(let i = 0; i < queue.songs.length; i += 10){
                const current = queue.slice(i, k)
                let j = i + 1;
                k += 10;
                const info = current.map(song => `\`${++j}.\` [${song.name}](${song.url})\n \`${song.formattedDuration} Requested by: ${song.user.tag}\``).join('\n');
                const embed = new Discord.MessageEmbed()
                .setTitle(`**Queue for ${message.guild}**`)
                .setDescription(`Now Playing: [${queue.songs[0].name}](${queue.songs[0].url})\n \`${queue.songs[0].formattedDuration} Requested by: ${song.user.tag}\`\n${info}`)
                pages.push(embed);
            }
            return pages;
        }

        const emoji = ["⏪", "⏩"]

        pagination(message, pages, emoji, 60000);
    }
}