
const Argv = require('yargs');
const yargs = require('yargs');
const {hideBin} = require('yargs/helpers');
const { addFilm, list, deleteTable, findOne, updateOne, deleteOne } = require('./movies/movieMethod');
const argv = yargs(hideBin(process.argv)).argv;

const app = async () =>{
    if(argv.add){
    const filmObj = {
        title: argv.title,
        actor: argv.actor,
        rating: argv.rating,
        releaseYear: argv.releaseYear
    }    
    await addFilm(filmObj)
    } else if(argv.list){
       await list();
    } else if(argv.deleteTable){
        deleteTable();
    }else if (argv.find){
        await findOne(argv);
    }else if (argv.update){
        await updateOne(argv)
    }else if(argv.deleteOne){
        await deleteOne(argv)
    }
    else{console.log('wrong query')}
}

app()