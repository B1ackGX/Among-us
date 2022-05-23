const discord = require("discord.js");

module.exports = {
    name: "kick",
    category: "moderation",
    description: "Kick a specified user from the server",
    usage: "kick <@user> <reason>",
    run: (client, message, args) => {

    if(!message.member.hasPermission("KICK_MEMBERS")) {
      return message.channel.send(`**${message.author.username}** You do not have enough permission to use this command!`);
    }

    if(!message.guild.me.hasPermission("KICK_MEMBERS")) {
      return message.channel.send(`**${message.author.username}** I do not have enough permission to use this command!`);
    }


    let target = message.mentions.members.first();

    if(!target) {
      return message.channel.send(`**${message.author.username}** Please mention the user who you want to kick!`);
    }
    
    if(target.user.bot){
      return message.channel.send(`**${message.author.username}** You can not kick bot!`);
    }

    if(target.hasPermission("ADMINSTRATOR")){
      return message.channel.send(`**${message.author.username}** You can not kick this user!`);
    }

    if(target.id === message.author.id) {
     return message.channel.send(`**${message.author.username}** You can not kick yourself!`);
    }
    
  if(!args[1]) {
    return message.channel.send(`**${message.author.username}** Please Give Reason to kick this user!`);
  }

    let embed = new discord.MessageEmbed()
    .setTitle("Action: Kick")
    .setDescription(`Kicked ${target} (${target.id})`)
    .setColor('RANDOM')
    .setFooter(`Kicked by ${message.author.username}`);
    message.channel.send(embed);
    target.kick(args[1]);
  }
};