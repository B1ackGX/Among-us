const Discord = require('discord.js');
const lyricFinder = require('lyrics-finder');

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
        
        let pages = []
        let currentPage = 0
        
        const reactionFilter = (reaction, user) => reaction['⏪', '⏩'].includes(reaction.emoji.name) && !user.bot
        

        const lyricEmbed = await message.channel.send(pages[currentPage])
        await lyricEmbed.react('⏪')
        await lyricEmbed.react('⏩')

        const collector = lyricEmbed.createReactionCollector(reactionFilter)

        collector.on('collection', (reaction, user) => {
            if(reaction.emoji.name === '⏩'){
                if(currentPage < pages.length-1){
                    currentPage+=1
                    lyricEmbed.edit(pages[currentPage])
                }
            }else if(reaction.emoji.name === '⏪'){
                if(currentPage !== 0){
                    currentPage-=1
                    lyricEmbed.edit(pages[currentPage])
                }
            }
        })
            let fullLyric = await lyricsFinder(" ", `${queue.songs[0].name}`)
            
            for (let i = 0; i < fullLyric.length; i+= 2048) {
                const lyric = fullLyric.substring(i, Math.min(fullLyric.length, i + 2048))
                const message = new Discord.MessageEmbed()
                    .setDescription(lyric)
                    .setThumbnail(queue.songs[0].thumbnail)
                    .setColor('GREEN')
                pages.push(message)
        }
    }
}