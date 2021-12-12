const { Sequelize, Model } = require("sequelize");
const db = require("../db");

class Meeting extends Model {}

Meeting.init(
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
        modelName: "meeting",
    }
);

module.exports = Meeting;
