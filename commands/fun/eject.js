const Discord = require('discord.js');
const Math = require('mathjs');

module.exports = {
    name: "eject",
    category: "fun",
    description: "Eject another user!",
    run: async (client, message, args) => {
        let target = message.mentions.members.first();
        if(!target)
        return message.channel.send('You need to choose to a user to eject!')

        if (target.id === message.author.id)
        return message.channel.send("You can't eject yourself!")

        images = [
            "https://c.tenor.com/5G2hzN6DNgIAAAAC/yellow-ejected-among-us.gif"
        ]

        let embed = new Discord.MessageEmbed()
        .setTitle(`You ejected ${target.displayName} :skull:`)
        .setImage(images[Math. floor(Math.random()*images.length)])
        .setTimestamp()
        message.channel.send(embed)
        
    }
}