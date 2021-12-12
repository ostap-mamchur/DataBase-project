const { Sequelize, Model } = require("sequelize");
const Group = require("./group");
const Client = require("./client");
const Festival = require("./festival");
const db = require("../db");

class MadeComplaint extends Model {}

MadeComplaint.init(
    {},
    {
        underscored: true,
        sequelize: db,
        modelName: "made_complaint",
    }
);

Group.hasMany(MadeComplaint);
Client.hasMany(MadeComplaint);
Festival.hasMany(MadeComplaint);

module.exports = MadeComplaint;
