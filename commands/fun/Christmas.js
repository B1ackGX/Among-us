const Discord = require('discord.js');

module.exports = {
    name: "eject",
    category: "fun",
    description: "Eject another user!",
    run: async (client, message, args) => {
        let Christmas = new Discord.MessageEmbed()
        .setTitle('🎄**Merry Chirstmas!**🎄')
        .setDescription('❤️Hope you guys have a wonderful Christmas!❤️')
        .setImage('https://c.tenor.com/INPIhJNeVP8AAAAC/anime.gif')
        .setColor('RED')
        .setTimestamp()
        .setFooter('By: Alfred')

        let everyone = msg.guild.defaultRole;
        
        message.channel.send(everyone.toString()).then(() =>{
            setTimeout(function() {
                message.channel.send(Christmas)
            }, 1000)
        })
    }
}