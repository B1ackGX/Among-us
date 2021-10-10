const Discord = require('discord.js');
const lyricsFinder = require('lyrics-finder');

module.exports = {
    name: "lyric",
    aliases: ['l'],
    description: "Check the song's lyric!",
    run: async (client, message, args) => {
        const queue = client.distube.getQueue(message)
        if (!queue) {
         message.channel.send(new Discord.MessageEmbed()
        .setTitle(`❌ **Missing Songs**`)
        .setDescription(`.lyric [Song Name]`)
        .setColor('GREEN')
        )}
        
        const song = args.join(" ") || queue.songs[0].name
        let pages = []
        let currentPage = 0

        const reactionFilter = (reaction, user) => ["⏪", "⏩"].include(reaction.emoji.name) && (message.author.id == user.id)
        const lyricEmbed = await message.channel.send(pages[currentPage])
        await lyricEmbed.react("⏪")
        await lyricEmbed.react("⏩")

        const collector = lyricEmbed.createReactionCollector(reactionFilter)

        collector.on('collect', (reaction, user) => {
            if(reaction.emoji.name === '⏩'){
                if(currentPage < pages.length-1){
                    currentPage += 1
                    lyricEmbed.edit(pages[currentPage])
                }
            }else if(reaction.emoji.name === '⏪'){
                if(currentPage !== 0){
                    currentPage -= 1
                    lyricEmbed.edit(pages[currentPage])
                }
            }
        })
        let lyrics = await lyricFinder(song) || "Not Found"
        for(let i = 0; i < lyrics.length; i+= 2048){
            const lyric = lyrics.substring(i, Math.min(lyrics.length, i + 2048))
            const message = new Discord.MessageEmbed()
            .setDescription(lyric)
            pages.push(message)
        }
    }
}