const { Sequelize, Model } = require("sequelize");
const db = require("../db");

class Festival extends Model {}

Festival.init(
    {
        name: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        date: {
            type: Sequelize.DATE,
            allowNull: true,
        },
        address: {
            type: Sequelize.STRING,
            allowNull: true,
        },
    },
    {
        underscored: true,
        sequelize: db,
        modelName: "festival",
    }
);

module.exports = Festival;
