const Sequelize = require("sequelize");

module.exports = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.DB_PASSWORD,
  {
    dialect: process.env.DB_DIALECT,
    port: process.env.DB_PORT,
    host: process.env.DB_HOST,
    define: {
      timestamps: false,
    },
  }
);
