const Discord = require('discord.js');

module.exports = {
    name: "queue",
    aliases: ['q'],
    description: "Check the current queue!",
    run: async (client, message, args) => {
        const queue = client.distube.getQueue(message)
        if (!queue) {
        return message.channel.send(new Discord.MessageEmbed()
        .setTitle(`**Queue for ${message.guild}**`)
        .setDescription(`__Now Playing:__\nNothing Playing!`)
        .setColor('RANDOM')
        )}

        let currentPage = 0;
        const pages = generateQueueEmbed(queue)
        const queueEmbed = await message.channel.send(pages[currentPage].setFooter(`Page ${currentPage+1} / ${pages.length}`), pages[currentPage])
        await queueEmbed.react('⏪')
        await queueEmbed.react('⏩')

        const filter = (reaction, user) => reaction['⏪', '⏩'].includes(reaction.emoji.name) && !user.bot
        const collector = queueEmbed.createReactionCollector(filter)

        collector.on('collect', reaction => {
            if(reaction.emoji.name === '⏩') {
                if(currentPage < pages.length-1) {
                    currentPage++;
                    queueEmbed.edit(pages[currentPage].setFooter(`Page ${currentPage+1} / ${pages.length}`), pages[currentPage])
                }
            } else if(reaction.emoji.name === '⏪'){
                if(currentPage !== 0){
                    --currentPage
                    queueEmbed.edit(pages[currentPage].setFooter(`Page ${currentPage+1} / ${pages.length}`), pages[currentPage])
                }
            }
        })

        function generateQueueEmbed(queue){
            const pages = []
            let k = 10;
            for(let i = 1; i < queue.songs.length; i += 11){
                const current = queue.songs.slice(i, k)
                let j = i-1;
                k += 10;
                const info = current.map(song => `\`${++j}.\` [${song.name}](${song.url})\n \`${song.formattedDuration} Requested by: ${song.user.tag}\``).join('\n');
                const embed = new Discord.MessageEmbed()
                .setTitle(`**Queue for ${message.guild}**`)
                .setDescription(`__Now Playing:__\n[${queue.songs[0].name}](${queue.songs[0].url})\n \`${queue.songs[0].formattedDuration} Requested by: ${queue.songs[0].user.tag}\`\n__Up Next:__\n${info}`)
                .setColor('RANDOM')
                .addField("\u200B", `**${queue.songs.length} songs in queue | ${queue.formattedDuration} total length**`)
                pages.push(embed);
            }
            return pages;
        }
    }
}