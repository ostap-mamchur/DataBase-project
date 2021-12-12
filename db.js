const Sequelize = require("sequelize");

module.exports = new Sequelize("rent_friends", "postgres", "Ostap123", {
    dialect: "postgres",
    define: {
        timestamps: false,
    },
});
