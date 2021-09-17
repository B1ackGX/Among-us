const Discord = require('discord.js');
const { prefix } = require('../../config.json');
const spotifyToYT = require("spotify-to-yt")

module.exports = {
    name: "play",
    aliases: ['p'],
    description: "play the song!",
    run: async (client, message, args) => {
        const music = args.join(" ");
        try{
            if(!message.member.voice.channel)
                return message.channel.send('❌ **Please join a voice channel!**');
            if(client.distube.isPlaying(message) && message.member.voice.channel != message.guild.me.voice.channel)
                return message.channel.send('❌ **You are not in the same voice channel as I am!**')
            if(!music)
                return message.channel.send(new Discord.MessageEmbed()
                    .setColor('#E74C3C')
                    .setTitle("❌ **You didn't provide a song!**")
                    .setDescription(`Usage: \`${prefix}play <Song>\``)    
                );
            message.channel.send(`🔎 **Searching** 🎵 \`${music}\``);
            if (music.toLowerCase().includes("spotify") && music.toLowerCase().includes("track")){
                const result = await spotifyToYT.trackGet(music)
                client.distube.play(message, result.url)
            } else if(music.toLowerCase().includes("spotify") && music.toLowerCase().includes("playlist")){
                const result = await spotifyToYT.playListGet(music)
                client.distube.playCustomPlaylist(message, result.songs)
            } else{
                client.distube.play(message, music);
            }
        } catch(e) {
            return message.channel.send('❌ **No Matches**')
        }
    }
}