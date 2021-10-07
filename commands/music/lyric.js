const Discord = require('discord.js');
const lyricsFinder = require('@sujalgoel/lyrics-finder');

module.exports = {
    name: "lyric",
    aliases: ['l'],
    description: "Check the song's lyric!",
    run: async (client, message, args) => {
        const queue = client.distube.getQueue(message)
        if (!queue) {
        return message.channel.send(new Discord.MessageEmbed()
        .setTitle(`❌ **Missing Songs**`)
        .setDescription(`.lyric [Song Name]`)
        .setColor('GREEN')
        )}
        
        const name = queue.songs[0].name
        const pages = []
        const currentPage = 0
        const lyrics = lyricsFinder.LyricsFinder(name)

        for(let i = 0; i < lyrics.length; i += 2048){
            let lyric = lyrics.substring(i, Math.min(lyrics.length, i + 2048))
            let lyricEmbed = new Discord.MessageEmbed()
            .setTitle(`${queue.songs[0].name}`)
            .setDescription(lyric)
            .setColor('GREEN')
            pages.push(lyricEmbed)
            
        }
        const reactionFilter = (reaction, user) => ["⏪", "⏩"].include(reaction.emoji.name) && (message.author.id == user.id)
        const Embed = await message.channel.send(pages[currentPage])

        let reactionCollector = Embed.createReactionCollector(reactionFilter)

        reactionCollector.on('collect', (reaction, user) => {
            if(reaction.emoji.name == '⏩'){
                if(currentPage < pages.length - 1){
                    currentPage += 1
                    Embed.edit(pages[currentPage])
                } else {
                    if (reaction.emoji.name == '⏪'){
                        if(currentPage !== 0){
                            currentPage -= 1
                            Embed.edit(pages[currentPage])
                        }
                    }
                }
            }
        })
    }
}