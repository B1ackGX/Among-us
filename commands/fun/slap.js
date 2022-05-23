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
        return message.channel.send('You need to choose to a user to slap them!');

        if (target.id === message.author.id)
        return message.channel.send("You can't slap yourself!");

        images = [
            'https://c.tenor.com/L0U84S9YTrYAAAAC/pikachu-slap.gif',
            'https://c.tenor.com/wOCOTBGZJyEAAAAC/chikku-neesan-girl-hit-wall.gif',
            'https://c.tenor.com/Sp7yE5UzqFMAAAAS/spank-slap.gif',
            'https://c.tenor.com/ra17G61QRQQAAAAC/tapa-slap.gif',
            'https://c.tenor.com/CAesvxP0KyEAAAAd/shinobu-kocho-giyuu-tomioka.gif',
            'https://c.tenor.com/FaXcxpmU3PMAAAAC/anime-slap.gif',
            'https://c.tenor.com/Irk80uToJA0AAAAC/slap-anime.gif',
            'https://c.tenor.com/2HjyotNxqiAAAAAC/cass-will.gif'
        ];

        let embed = new Discord.MessageEmbed()
        .setTitle(`You slap ${target.displayName} :hand_splayed:`)
        .setImage(images[Math. floor(Math.random()*images.length)])
        .setTimestamp();
        message.channel.send(embed);
        
    }
};