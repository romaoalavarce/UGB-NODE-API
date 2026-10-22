const {Datatypes} = require("sequelize");

const sequelize = require("../database/database.js");

const Hero = sequelize.define("hero", {

    Id: {
        type: Datatypes.INTEGER,
        autoincrement: true,
        primarykey: true,
    },

    name: {
        type: Datatype.STRING,
        allowNull: false,
    },

    universe: {
        type: Datatypes.STRING,
        allowNull: false,
    },

    power: {
        type: Datatypes.STRING,
        allowNull: false,
    }

});

module.exports = Hero;