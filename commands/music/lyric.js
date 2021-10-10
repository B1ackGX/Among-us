const Discord = require('discord.js');
const lyricsFinder = require('lyrics-finder');

module.exports = {
    name: "lyric",
    aliases: ['l'],
    description: "Check the song's lyric!",
    run: async (client, message, args) => {
        const queue = client.distube.getQueue(message)
        if (!queue && !args[0]) {
        return message.channel.send(new Discord.MessageEmbed()
        .setTitle(`❌ **Missing Songs**`)
        .setDescription(`.lyric [Song Name]`)
        .setColor('GREEN')
        )}
        
        let lyrics = await lyricsFinder(args.join(' ')) || "Not Found!";
        let embed = new Discord.MessageEmbed()
        .setTitle(`TEST`)
        .setDescription(lyrics)
        .setColor('GREEN')
        message.channel.send(embed)
    }
}