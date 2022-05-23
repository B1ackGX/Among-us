const discord = require("discord.js");

module.exports = {
    name: "ban",
    category: "moderation",
    description: "Ban a specified user from the server",
    usage: "ban <@user> <reason>",
    run: async (client, message, args) => {
    if(!message.member.hasPermission("BAN_MEMBERS")) {
      return message.channel.send(`**${message.author.username}** You do not have perms to ban this user!`);
    }

    if(!message.guild.me.hasPermission("BAN_MEMBERS")) {
      return message.channel.send(`**${message.author.username}** I do not have permission to ban users!`);
    }

    const target = message.mentions.members.first();

    if(!target) {
      return message.channel.send(`**${message.author.username}** Please mention the user who you want to ban!`);
    }

    if(target.id === message.author.id) {
      return message.channel.send(`**${message.author.username}** You can not ban yourself!`);
    }

   if(!args[1]) {
     return message.channel.send(`**${message.author.username}**, Please give a reason to ban this user!`);
   }

    let embed = new discord.MessageEmbed()
    .setTitle("Action : Ban")
    .setDescription(`Banned ${target} (${target.id})`)
    .setColor('RANDOM')
    .setThumbnail(target.avatarURL)
    .setFooter(`Banned by ${message.author.tag}`);
    message.channel.send(embed);
    target.ban(args[1]);
  }
};