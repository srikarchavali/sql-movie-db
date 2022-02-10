const Film = require("./movieModal")
const yargs = require('yargs');
const {hideBin} = require('yargs/helpers')
const argv = yargs(hideBin(process.argv)).argv;

exports.addFilm = async (filmObj) => {
    try {
        await Film.sync()
        await Film.create(filmObj)
    } catch (error) {
        console.log(error);        
    }
}

exports.list = async () => {
    try {
        const filmList = await Film.findAll();
        console.log(filmList)
    } catch (error) {
        console.log(error);
    }
}
