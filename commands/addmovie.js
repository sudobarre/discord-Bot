const Guild = require("../schema/guildSchema");


module.exports = {
	name :'addmovie',
	description: 'adds a movie',
    aliases: ['addm'],
	once: true,
	async execute(client, message, cmd, args) {
        //name of movie
        if(args.length < 1) return message.reply("Please send the movie to add!");
        const id = message.guild.id;
        let movieArr = args;
        const movie = movieArr.join(' ');
        try {
            const guild = await Guild.findOne({guildId: id});
            let newMovies = guild.movies;
            newMovies.unshift(movie); 
//            const newQuotes = {quotes:newQuotesArr};
            await guild.update({guildId: id}, newMovies);
            return message.reply('Movie added successfully!');
        } catch (error) {
            console.error(error);
        }
    },
};
    
