const Discord = require('discord.js');

module.exports = {
    name: "leave",
    aliases: ['disconnect', 'dc'],
    description: "leave!",
    run: async (client, message, args) => {
        if (message.guild.me.voice.channel) {
          client.distube.voices.leave(message);
            message.channel.send("📭 **Successfully disconnected**");
          } else {
            message.channel.send('❌ **I am not connected to a voice channel.** \`Use .join to get me in\`');
          }
    }
};