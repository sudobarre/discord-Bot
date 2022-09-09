module.exports = {
    name: 'help',
    description: 'displays all available commands',
    once : true,
    async execute(client, message, cmd, args, Discord){
        const embed = new Discord.MessageEmbed()
            .setColor('#75BB67')
            .setTitle('Available Commands')
            .setDescription('Using the prefix -rafi:\n')
            .addFields(
                {name: 'coinflip (flip, coin)', value: 'Tosses a coin.' },
                {name: 'dice [n]', value: 'Rolls an n-sided dice, where n is the parameter passed in the command. Cant be lower than 1.' },
                {name: 'inspire', value: 'Feeling down? Let RafiBot motivate you!' },
                {name: 'quote (q) [member_tag]', value: 'Returns a random famous catchphrase from the member tag passed or in some cases and with very special people with just their nicknames.' },
                {name: 'vote', value: 'Simple voting message with the proper emoji reactions added.' },
                {name: 'bark (woof, raf)', value: 'Barks like a good boy.'},
                {name:'play (p) [song_name | yt_link]', value:'Plays a yt song via link or name. As he was rightly taught by his owner, he never stops, always at 110 percent; so when a member leaves the channel, he would greatly appreciate it if you used -rafi stop when done listening.'},
                {name: 'stop', value: 'Stops music and bot leaves the vc.'},
                {name: 'skip', value: 'Skips the current song.'},
                {name: 'queue', value: 'Displays the songs queue.'},
                {name: 'songs', value: 'Offers a personalised selection of music depending on the category chosen. May take a bit to load the songs.'},
                {name: 'akinator', value: "Starts an Akinator session!"},
                {name: '/pause', value: 'Pauses the music'},
                {name: '/info', value: "Displays info about the currently playing song"},
                {name: '/play [yt_url | song_name]', value: "Loads a single song or a playlist of songs from a url or a provided keyword from yt."},
                {name: '/queue', value: "Displays the current song queue."},
                {name: '/quit', value: "Stops the bot and clears the queue."},
                {name: '/resume', value: "Resumes the music."},
                {name: '/shuffle', value: "Shuffles the queue."},
                {name: '/skip', value: "Skips the current song."},
                {name: '/skipto [track_queue_number]', value: "Skips to a certain track in the queue by providing the number of the track to skip to."},
            );
        message.channel.send({ embeds: [embed] });
    },
};