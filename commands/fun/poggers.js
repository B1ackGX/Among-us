const Discord = require('discord.js');
const Math = require('mathjs');

module.exports = {
    name: "poggers",
    aliases: ['pog'],
    category: "fun",
    description: "POGGERS",
    run: async (client, message, args) => {
        images = [
            "https://c.tenor.com/bSz-g9FD1EgAAAAC/poggers.gif",
            "https://c.tenor.com/K1l4NRU4Wt8AAAAS/poggers-anime-girls.gif",
            "https://c.tenor.com/rpjoJ7J4Um0AAAAS/poggers-anime.gif",
            "https://c.tenor.com/aY0G0ge6mHEAAAAS/poggies-poggers.gif",
            "https://c.tenor.com/tyG2vow1PgMAAAAC/anime-poggers-sound-of-poggers.gif",
            "https://c.tenor.com/fiF1IPiP5mYAAAAC/pog-poggers.gif",
            "https://c.tenor.com/TyUPrHMus3MAAAAC/anime-poggers-anime.gif",
            "https://c.tenor.com/PAbldaV_YjIAAAAS/poggers.gif",
            "https://c.tenor.com/RIUM1Xr-dDkAAAAC/poggers-kiss.gif",
            "https://c.tenor.com/y1SlNycXZHYAAAAC/poggers-pogger.gif",
            "https://c.tenor.com/ZMM0y-7EoAcAAAAS/poggers-pogger.gif",
            "https://c.tenor.com/2gVizfQrpkAAAAAS/anime-poggers-anime.gif",
            "https://c.tenor.com/_iirZv3rs2AAAAAC/poggers-kissing.gif",
            "https://c.tenor.com/TyUPrHMus3MAAAAC/anime-poggers-anime.gif",
            "https://c.tenor.com/Kyb-Bip6_nsAAAAC/poggers-anime.gif",
            "https://c.tenor.com/1qJzsEYYpCUAAAAS/anime-poggers-anime.gif",
            "https://c.tenor.com/K1l4NRU4Wt8AAAAC/poggers-anime-girls.gif"
        ];

        let embed = new Discord.MessageEmbed()
        .setTitle(`Poggers! :weary:`)
        .setImage(images[Math. floor(Math.random()*images.length)])
        .setTimestamp();
        message.channel.send(embed);
        
    }
};