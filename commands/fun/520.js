const discord = require('discord.js');

module.exports = {
    name: "520",
    category: "fun",
    description: "520黄诗萍",
    run: async (client, message, args) => {

        let embed = new discord.MessageEmbed()
        .setTitle('❤️黄诗萍我爱你❤️')
        .setImage('https://c.tenor.com/Gpg2Fv5w_V8AAAAM/heart-anime.gif')
        .setColor('PURPLE')
        .setTimestamp()
        message.channel.send(embed).then(msg => {
            setTimeout(function(){ 
                message.channel.send('黄诗萍我余生都会爱你\n 这一辈子我都想和你在一起\n 不离不弃\n ❤️爱你❤️').then(msg =>{
                    setTimeout(function(){ 
                        message.channel.send(new discord.MessageEmbed()
                        .setImage('https://c.tenor.com/7T1cuiOtJvQAAAAC/anime-kiss.gif')
                        .setColor('PURPLE')
                        .setTimestamp()
        )
                    }, 3000);
                })
            }, 3000);
        })
    }
}