const { Sequelize, Model } = require("sequelize");
const db = require("../db");
const HiredFriend = require("./hiredFriend");

class Holiday extends Model {}

Holiday.init(
    {
        date: {
            type: Sequelize.STRING,
            allowNull: true,
        },
    },
    {
        underscored: true,
        sequelize: db,
        modelName: "holiday",
    }
);

HiredFriend.hasMany(Holiday);
Holiday.belongsTo(HiredFriend);

module.exports = Holiday;
