const {Sequelize} = require("sequelize");
require("dotenv").config();

let sequelize = new Sequelize(process.env.MYSQL_URI);

// Autheniticating using .then and .catch
// sequelize.authenticate().then(()=>{
//     console.log('Connected to database')
// }).catch((err)=>{console.log(err)
// })

// Autheniticating using async await
let connetion = async()=>{
    try {
        await sequelize.authenticate()
        await console.log('Connected to database')
    } catch (error) {
        console.log(error)
    }
}
connetion();
module.exports = sequelize