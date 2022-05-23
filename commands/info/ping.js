const {MessageEmbed} = require('discord.js');

module.exports = {
    name: "ping",
    category: "info",
    description: "Returns latency and API ping",
    run: async (client, message, args) => {
       const msg = await message.channel.send('🏓 Pinging...');
       const Embed = new MessageEmbed()
       .setTitle('🏓Pong!')
       .setDescription(`🏓🏓🏓\nLatency is ${Math.floor(msg.createdTimestamp - msg.createdTimestamp)}MS\nAPI is ${Math.round(client.ws.ping)}MS\n🏓🏓🏓`)
       .setColor('RANDOM');
       msg.edit(Embed);
    }
};