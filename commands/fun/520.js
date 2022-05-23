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
        .setTimestamp();
        message.channel.send(embed).then(msg => {
            setTimeout(function(){ 
                message.channel.send('黄诗萍我余生都会爱你').then(msg =>{
                    setTimeout(function(){ 
                        message.channel.send('这一辈子我只想和你在一起').then(msg =>{
                            setTimeout(function(){ 
                                message.channel.send('不离不弃').then(msg =>{
                                    setTimeout(function(){ 
                                        message.channel.send('❤️爱你❤️').then(msg =>{
                                            setTimeout(function(){ 
                                                message.channel.send('-----$$$$---------$$$$').then(msg =>{
                                                    setTimeout(function(){
                                                        message.channel.send('---$$$$$$$$-----$$$$$$$$').then(msg =>{
                                                            setTimeout(function(){
                                                                message.channel.send('-$$$$$$$$$$$$-$$$$$$$$$$$$').then(msg =>{
                                                                    setTimeout(function(){
                                                                        message.channel.send('$$$$$$$$$$$$$$$$$$$$$$$$$$$').then(msg =>{
                                                                            setTimeout(function(){
                                                                                message.channel.send('$$$$$$$$$$$$$$$$$$$$$$$$$$$').then(msg =>{
                                                                                    setTimeout(function(){
                                                                                        message.channel.send('-$$$$$$$$$$$$$$$$$$$$$$$$$').then(msg =>{
                                                                                            setTimeout(function(){
                                                                                                message.channel.send('--$$$$$$$$$$$$$$$$$$$$$$$').then(msg =>{
                                                                                                    setTimeout(function(){
                                                                                                        message.channel.send('----$$$$$$$$$$$$$$$$$$$').then(msg =>{
                                                                                                            setTimeout(function(){
                                                                                                                message.channel.send('-------$$$$$$$$$$$$$').then(msg =>{
                                                                                                                    setTimeout(function(){
                                                                                                                        message.channel.send('-------------$$$$$$$').then(msg =>{
                                                                                                                            setTimeout(function(){
                                                                                                                                message.channel.send('----------------$$$').then(msg =>{
                                                                                                                                    setTimeout(function(){
                                                                                                                                        message.channel.send('-----------------$').then(msg =>{
                                                                                                                                            setTimeout(function(){
                                                                                                                                                let embed2 = new discord.MessageEmbed()
                                                                                                                                                .setImage('https://c.tenor.com/7T1cuiOtJvQAAAAC/anime-kiss.gif')
                                                                                                                                                .setColor('PURPLE')
                                                                                                                                                .setFooter('❤️你是我唯一❤️')
                                                                                                                                                .setTimestamp();
                                                                                                                                                message.channel.send(embed2);
                                                                                                                                            }, 1000);
                                                                                                                                        });
                                                                                                                                    }, 1000);
                                                                                                                                });
                                                                                                                            }, 1000);
                                                                                                                        });
                                                                                                                    }, 1000);
                                                                                                                });
                                                                                                            }, 1000);
                                                                                                        });
                                                                                                    }, 1000);
                                                                                                });
                                                                                            }, 1000);
                                                                                        });
                                                                                    }, 1000);
                                                                                });
                                                                            }, 1000);
                                                                        });
                                                                    }, 1000);
                                                                });
                                                            }, 1000);
                                                        });
                                                    }, 1000);
                                                });
                                            }, 1000);
                                        });
                                    }, 1000);
                                });
                            }, 1000);
                        });
                    }, 1000);
                });
            }, 1000);
        });
    }
};