const sequelize = require('../db/connection');
const {DataTypes} = require('sequelize');

const Film = sequelize.define('Nteflix', {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    actor: {
        type: DataTypes.STRING,
        allowNull: false
    },
    // rating: {

    // }
})

module.exports = Film;