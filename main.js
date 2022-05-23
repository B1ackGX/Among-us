const { DisTube } = require("distube");
const { SpotifyPlugin } = require('@distube/spotify');
const { SoundCloudPlugin } = require('@distube/soundcloud');
const { YtDlpPlugin } = require('@distube/yt-dlp');
const Discord = require('discord.js');
const { Client, Collection} = require("discord.js");
const { config } = require("dotenv");
const {cookie, token } = require("./config.json");
const client = new Client({
    disableEveryone: false
});
const Prefix = require('discord-prefix');
let defaultPrefix = '.';

client.distube = new DisTube(client, {
    leaveOnStop: false,
    searchSongs: 0,
    emitNewSongOnly: true,
    leaveOnFinish: true,
    emptyCooldown: 300,
    nsfw: true,
    emitAddSongWhenCreatingQueue: false,
    emitAddListWhenCreatingQueue: false,
    youtubeCookie: cookie,
    plugins: [
      new SpotifyPlugin({
		emitEventsAfterFetching: true
      }),
        new SoundCloudPlugin(),
        new YtDlpPlugin()
    ],
    youtubeDL: false
  });
// Collections
client.commands = new Collection();
client.aliases = new Collection();

// Run the command loader
["command"].forEach(handler => {
    require(`./handlers/${handler}`)(client);
});

client.on("ready", () => {
    console.log(`AMONG US!`);
    client.user.setActivity(`AMONG US!`);
});

client.on("message", async message => {
	//Stop the code if its in DM
    if(!message.guild) return;
    
    //get the Prefix for the Discord server
    let prefix = Prefix.getPrefix(message.guild.id);
    
    //set to default Prefix if there isn't any
    if (!prefix) prefix = defaultPrefix;
    
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
    .on("playSong", (queue, song) => {
    if (song.playlist){
        queue.textChannel.send(new Discord.MessageEmbed()
    .setTitle('**Playlist added to queue**')
    .setDescription(`${song.playlist.name}`)
    .setThumbnail(`${song.playlist.thumbnail}`)
    .addFields(
    { name: '**Estimated Time until playing**', value: `Now`},
    { name: '**Position in queue**', value: "Now", inline: true},
    { name: '**Enqueued**', value: `\`${queue.songs.length}\` songs`, inline: true}
    ));
    } else {
        if(queue.songs[0] && queue.songs.length === 1){
        queue.textChannel.send(`**Playing**:notes: \`${song.name}\` - Now! `);
        if(queue.songs[1]){
            return;
        }
    } else {
        return;
    }
    }
    })
    .on('addSong', (queue, song) => queue.textChannel.send(new Discord.MessageEmbed()
    .setTitle('**Added to queue**')
    .setDescription(`[${song.name}](${song.url})`)
    .setThumbnail(`${song.thumbnail}`)
    .addFields(
    { name: '**Channel**', value: `${song.uploader.name}`, inline: true},
    { name: '**Song Duration**', value: `${song.formattedDuration}`, inline: true},
    { name: '**Estimated Time Until Playing**', value: `${queue.formattedDuration}`, inline: true},
    { name: '**Position in Queue**', value: `${queue.songs.length - 1}`})
    ))
    .on('addList', (queue, playlist) => queue.textChannel.send(new Discord.MessageEmbed()
    .setTitle('**Playlist added to queue**')
    .setDescription(`${playlist.name}`)
    .setThumbnail(`${playlist.thumbnail}`)
    .addFields(
    { name: '**Estimated Time until playing**', value: `${queue.formattedDuration}`},
    { name: '**Position in queue**', value: `${queue.songs.length -1 }`, inline: true},
    { name: '**Enqueued**', value: `\`${queue.songs.length - 1}\` songs`, inline: true}
    )
    ))
    .on("initQueue", queue => {
        queue.autoplay = false;
    })
    .on('error', (channel, error) => {
    channel.send("An error encountered: " + error);
    console.error(error);
  	});

client.login(token);
client.dbLogin