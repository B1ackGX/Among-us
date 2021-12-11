const discord = require('discord.js');

module.exports = {
    name: "520",
    category: "fun",
    description: "520黄诗萍",
    run: async (client, message, args) => {

        message.channel.send(new discord.MessageEmbed()
        .setTitle('❤️黄诗萍我爱你❤️')
        .setImage('https://c.tenor.com/Gpg2Fv5w_V8AAAAM/heart-anime.gif')
        .setcolor('PURPLE')
        .setTimestamp()
        )
    }
}