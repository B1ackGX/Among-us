module.exports = {
    name: "purge",
    category: "moderation",
    description: "Clears the chat",
    run: async (client, message, args) => {
        if (message.deletable) {
            message.delete();
        }

        if (!message.member.hasPermission("MANAGE_MESSAGES")) {
            return message.channel.send(`**${message.author.username}** You do not have enough permission!`)
            .then (m => m.delete({timeout: 2000}));
        }
        
        if (isNaN(args[0]) || parseInt(args[0]) <= 0) {
            return message.channel.send(`**${message.author.username}** Please specify how many messages you want to delete!`)
            .then (m => m.delete({timeout: 2000}));
        }

        if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) {
            return message.channel.send (`**${message.author.username}** I dont have enough permission!`)
            .then (m => m.delete({timeout: 2000}));
        }

        let deleteAmount;
        
        if (parseInt(args[0]) > 100) {
            deleteAmount = 100;
        } else {
            deleteAmount = parseInt(args[0]);
        }
        
        message.channel.bulkDelete (deleteAmount, true)
            .then (deleted => message.channel.send(`I deleted \`${deleted.size}\` messages.`)
            .then (m => m.delete({timeout: 2000})))
            .catch (err => message.channel.send(`**${message.author.username}** Something went wrong... ${err}`));
    }
};