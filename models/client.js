const { Sequelize, Model } = require("sequelize");
const db = require("../db");

class Client extends Model {}

Client.init(
    {
        firstName: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        lastName: {
            type: Sequelize.STRING,
            allowNull: true,
        },
    },
    {
        underscored: true,
        sequelize: db,
        modelName: "client",
    }
);

module.exports = Client;
