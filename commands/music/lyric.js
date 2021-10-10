const Discord = require('discord.js');
const lyricsFinder = require('lyrics-finder');

module.exports = {
    name: "lyric",
    aliases: ['l'],
    description: "Check the song's lyric!",
    run: async (client, message, args) => {
        const queue = client.distube.getQueue(message)
        const Name = args[0]
        if (!queue && !Name) {
        return message.channel.send(new Discord.MessageEmbed()
        .setTitle(`❌ **Missing Songs**`)
        .setDescription(`.lyric [Song Name]`)
        .setColor('GREEN')
        )}
        
        const name = queue.songs[0].name
        let lyric = await lyricsFinder(Name.join(' ')) || "Not Found"
        let embed = new Discord.MessageEmbed()
        .setTitle(`${name}`)
        .setDescription(lyric)
        .setColor('GREEN')
        message.channel.send(embed)
    }
}