const DisTube = require("distube")
const Discord = require('discord.js')
const { Client, Collection} = require("discord.js");
const { config } = require("dotenv");
const {prefix, token, cookie } = require("./config.json")
const client = new Client({
    disableEveryone: true
})
const distube = new DisTube(client, { searchSongs: false, emitNewSongOnly: true, youtubeCookie: cookie, updateYouTubeDL: false})
client.distube = distube;

// Collections
client.commands = new Collection();
client.aliases = new Collection();

// Run the command loader
["command"].forEach(handler => {
    require(`./handlers/${handler}`)(client);
});

client.on("ready", () => {
    console.log(`AMONG US!`);

    client.user.setActivity(`AMONG US!`) 
})

client.on('guildMemberAdd', member => {
    member.send('**' + member.user.username + '** Welcome to the server!');
});

client.on("message", async message => {
   

    if (message.author.bot) return;
    if (!message.guild) return;
    if (!message.content.startsWith(prefix)) return;

    // If message.member is uncached, cache it.
    if (!message.member) message.member = await message.guild.fetchMember(message);

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    
    if (cmd.length === 0) return;
    
    // Get the command
    let command = client.commands.get(cmd);
    // If none is found, try to find it by alias
    if (!command) command = client.commands.get(client.aliases.get(cmd));

    // If a command is finally found, run the command
    if (command) 
        command.run(client, message, args);
});
    
    client.distube
    .on("addSong", (message, queue, song) => message.channel.send(new Discord.MessageEmbed()
    .setTitle('**Added to queue**')
    .setDescription(`[${song.name}](${song.url})`)
    .setThumbnail(`${song.thumbnail}`)
    .addFields(
    { name: '**Channel**', value: `${song.info.videoDetails.author.name}`, inline: true},
    { name: '**Song Duration**', value: `${song.formattedDuration}`, inline: true},
    { name: '**Estimated Time Until Playing**', value: `${queue.formattedDuration}`, inline: true},
    { name: '**Position in Queue**', value: `${queue.songs.length - 1}`})
    ))
    .on("playList", (message, queue, playlist) => message.channel.send(new Discord.MessageEmbed()
    .setTitle('**Playlist added to queue**')
    .setDescription(`${playlist.name}`)
    .setThumbnail(`${playlist.thumbnail.url}`)
    .addFields(
    { name: '**Estimated Time until playing**', value: `Now`},
    { name: '**Position in queue**', value: "Now", inline: true},
    { name: '**Enqueued**', value: `\`${playlist.songs.length}\` songs`, inline: true}
    )
    ))
    .on("addList", (message, queue, playlist) => message.channel.send(new Discord.MessageEmbed()
    .setTitle('**Playlist added to queue**')
    .setDescription(`${playlist.name}`)
    .setThumbnail(`${playlist.thumbnail.url}`)
    .addFields(
    { name: '**Estimated Time until playing**', value: `${queue.formattedDuration}`},
    { name: '**Position in queue**', value: `${queue.songs.length -1 }`, inline: true},
    { name: '**Enqueued**', value: `\`${queue.songs.length - 1}\` songs`, inline: true}
    )
    ))
    .on("initQueue", queue => {
        queue.autoplay = false;
        queue.initMessage = `**Playing**:notes: \`${song.name}\` - Now! `
    })
    .on("error", (message, e) => {
        console.error(e)
        message.channel.send("An error encountered: " + e);
    });
client.login(process.env.token);