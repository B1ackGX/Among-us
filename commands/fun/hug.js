const discord = require('discord.js');

module.exports = {
    name: "hug",
    category: "fun",
    description: "Hug another user!",
    run: async (client, message, args) => {
        let target = message.mentions.members.first();
        if(!target)
        return message.channel.send('You need to choose to a user to hug!');

        if (target.id === message.author.id)
        return message.channel.send("You can't hug yourself!");
        images = [
            "https://c.tenor.com/gowinK__PvAAAAAC/anime-cuddle.gif",
            "https://i.imgur.com/IAxUnda.gif?noredirect",
            "https://acegif.com/wp-content/gif/anime-hug-38.gif",
            "https://acegif.com/wp-content/gif/anime-hug-59.gif",
            "https://thumbs.gfycat.com/GratefulComplexGlassfrog-size_restricted.gif",
            "https://media0.giphy.com/media/HaC1WdpkL3W00/giphy.gif",
            "https://thumbs.gfycat.com/FrenchShimmeringAmericanmarten-size_restricted.gif",
            "https://c.tenor.com/9e1aE_xBLCsAAAAC/anime-hug.gif",
            "https://c.tenor.com/pcULC09CfkgAAAAC/hug-anime.gif"
        ];

        let embed = new discord.MessageEmbed()
        .setTitle(`You hug ${target.displayName} :heart:`)
        .setImage(images[Math. floor(Math.random()*images.length)])
        .setTimestamp();
        message.channel.send(embed);
    }
};