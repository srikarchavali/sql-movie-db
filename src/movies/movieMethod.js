const Film = require("./movieModal")
const yargs = require('yargs');
const {hideBin} = require('yargs/helpers')
const argv = yargs(hideBin(process.argv)).argv;

// Add films
exports.addFilm = async (argv) => {
    try {
        await Film.sync()
        await Film.create(argv)
        console.log(`Movie titled ${argv.title} created`)
    } catch (error) {
        console.log(error);        
    }
}

// List all films
exports.list = async () => {
    try {
        const filmList = await Film.findAll({
        //     include: [
        //         {title: Film.title,
        //         as: 'Title' },
        //         {actor: Film.actor,
        //         as: 'Actor' },
        //         {rating: Film.rating,
        //         as: 'Rating' },
        //         {releaseYear: Film.releaseYear,
        //         as: 'Release year' },
        //     ]
        });
        console.log(filmList)
    } catch (error) {
        console.log(error);
    }
}

//Deleting table
exports.deleteTable = async ()=>{
    try {
        await Film.drop();
        console.log("film table dropped!");
    } catch (error) {
        console.log(error);
    }
}
// Delete movie
exports.deleteOne = async ()=>{
    const deletedFilm = await Film.destroy({
        where: {
          title: argv.title
        }
      });
    console.log(`Movie titled ${argv.title} is deleted`)
}

//Finding one movie
exports.findOne = async(argv) =>{
    if(argv.title) {
        const searchedFilm = await Film.findOne({ where: { title: argv.title } });
        if(searchedFilm===null){
            console.log(`No movie named ${argv.title} found in the database` )
        }
        else{
        console.log(searchedFilm); // 'My Title'
        }
    }else if (argv.actor){
        const searchedFilm = await Film.findOne({ where: { title: argv.actor } });
    }
    else {
        console.log('Wrong command');
    } 
}

//Update a movie
exports.updateOne = async (argv)=>{

    newTitle = await Film.update({ title: argv.newTitle }, {
        where: {
            title: argv.title
        }
    });
    console.log(`Movie title updated from ${argv.title} to ${argv.newTitle}`)
}

