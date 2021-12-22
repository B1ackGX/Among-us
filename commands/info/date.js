const Discord = require('discord.js');
const date = require('date-and-time');

module.exports = {
    name: "date",
    description: "Check the current queue!",
    run: async (client, message, args) => {
        const date1 = date.format(now, 'MM/DD/YYYY')
        const date2 = new Date(12/21/2021)
        if(date.isSameDay(date1, date2)){
            message.channel.send("Date Test")
        } else {
            return
        }
    }
}   
