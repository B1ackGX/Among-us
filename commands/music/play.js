const Discord = require('discord.js');
const { prefix } = require('../../config.json');
const spotifyToYT = require("spotify-to-yt");
const {Spotify, YouTube} = require('./emoji.json');

module.exports = {
    name: "play",
    aliases: ['p'],
    description: "play the song!",
    run: async (client, message, args) => {
        const music = args.join(" ");
        try{
            const queue = client.distube.getQueue(message);
            if(!message.member.voice.channel)
                return message.channel.send('❌ **Please join a voice channel!**');
            if(client.distube.playing && message.member.voice.channel != message.guild.me.voice.channel)
                return message.channel.send('❌ **You are not in the same voice channel as I am!**');
            if(!music)
                return message.channel.send(new Discord.MessageEmbed()
                    .setColor('#E74C3C')
                    .setTitle("❌ **You didn't provide a song!**")
                    .setDescription(`Usage: \`${prefix}play <Song>\``)    
                );
            if (music.toLowerCase().includes("spotify")){
                message.channel.send(`${Spotify} **Searching** 🎵 \`${music}\``);
            }else if (music.toLowerCase().includes("youtube")){
                message.channel.send(`${YouTube} **Searching** 🎵 \`${music}\``);
            }else{
                message.channel.send(`🔎 **Searching** 🎵 \`${music}\``);
            }
			client.distube.play(message.member.voice.channel, music, {
      			member: message.member,
      			textChannel: message.channel,
      			message
    			});
        } catch(e) {
            console.log(e);
            return message.channel.send('❌ **No Matches**');
        }
    }
};