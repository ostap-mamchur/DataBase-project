const { Sequelize, Model } = require("sequelize");
const db = require("../db");

class Gift extends Model {}

Gift.init(
    {
        name: {
            type: Sequelize.STRING,
            allowNull: true,
        },
    },
    {
        underscored: true,
        sequelize: db,
        modelName: "gift",
    }
);

module.exports = Gift;
