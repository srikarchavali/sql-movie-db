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
    rating: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    releaseYear: {
        type: DataTypes.INTEGER,
        allowNull: true  
    }
})

module.exports = Film;