const { Sequelize, Model } = require("sequelize");
const db = require("../db");

class Complaint extends Model {}

Complaint.init(
    {
        title: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        date: {
            type: Sequelize.DATE,
            allowNull: true,
        },
        description: {
            type: Sequelize.STRING,
            allowNull: true,
        },
    },
    {
        underscored: true,
        sequelize: db,
        modelName: "complaint",
    }
);

module.exports = Complaint;
