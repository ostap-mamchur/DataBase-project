const { Sequelize, Model } = require("sequelize");
const db = require("../db");

class Group extends Model {}

Group.init(
    {
        name: {
            type: Sequelize.STRING,
            allowNull: true,
        },
    },
    {
        underscored: true,
        sequelize: db,
        modelName: "group",
    }
);

module.exports = Group;
