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
        
        let string = "";

        if(queue.songs[0]) string += `__Now Playing:__\n [${queue.songs[0].name}](${queue.songs[0].url})\n \`${queue.songs[0].formattedDuration} Requested by: ${queue.songs[0].user.tag}\``
        if(queue.songs[1]) string += `\n__Up Next:__\n ${queue.songs.map((song, id) => `\`${id}.\` [${song.name}](${song.url})\n \`${song.formattedDuration} Requested by: ${song.user.tag}\``).slice(1, 100).join("\n")}`

        const embeds = generateEmbed(queue)

        function generateEmbed(queue) {
        const embeds = [];
        let k = 10;
        for(let i = 0; i< queue.songs.length; i+= 10) {
        k += 10;
        const embed = new Discord.MessageEmbed()
        .setTitle(`**Queue for ${message.guild}**`)
        .setDescription(string)
        .setColor('RANDOM')
        .addField("\u200B", `**${queue.songs.length} songs in queue | ${queue.formattedDuration} total length**`)
        embeds.push(embed);
        }
        return embeds;
        }

        /*
        
        */
        const pages = [
            embeds
        ]
        
        const emoji = ["⏪", "⏩"]

        pagination(message, pages, emoji, 60000);
    }
}