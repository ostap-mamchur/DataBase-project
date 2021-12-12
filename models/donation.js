const { Sequelize, Model } = require("sequelize");
const HiredFriend = require("./hiredFriend");
const Client = require("./client");
const Gift = require("./gift");
const db = require("../db");

class Donation extends Model {}

Donation.init(
    {},
    {
        underscored: true,
        sequelize: db,
        modelName: "donation",
    }
);

HiredFriend.hasMany(Donation);
Client.hasMany(Donation);
Gift.hasMany(Donation);

module.exports = Donation;
