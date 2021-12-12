const Sequelize = require("sequelize");

module.exports = new Sequelize("rent_friends", "postgres", "Ostap123", {
  dialect: "postgres",
  port: "5432",
  host: "localhost",
  define: {
    timestamps: false,
  },
});
