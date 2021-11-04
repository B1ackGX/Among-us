const Discord = require('discord.js');
const Math = require('mathjs');

module.exports = {
    name: "slap",
    aliases: ['bitchslap'],
    category: "fun",
    description: "Eject another user!",
    run: async (client, message, args) => {
        let target = message.mentions.members.first();
        if(!target)
        return message.channel.send('You need to choose to a user to slap them!')

        if (target.id === message.author.id)
        return message.channel.send("You can't slap yourself!")

        images = [
            
        ]

        let embed = new Discord.MessageEmbed()
        .setTitle(`You slap ${target.displayName} :hand_splayed:`)
        .setImage(images[Math. floor(Math.random()*images.length)])
        .setTimestamp()
        message.channel.send(embed)
        
    }
}