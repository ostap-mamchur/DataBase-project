const Sequelize = require("sequelize");

// module.exports = new Sequelize(
//   process.env.DB_NAME,
//   process.env.DB_USER,
//   process.DB_PASSWORD,
//   {
//     dialect: process.env.DB_DIALECT,
//     port: process.env.DB_PORT,
//     host: process.env.DB_HOST,
//     define: {
//       timestamps: false,
//     },
//   }
// );

module.exports = new Sequelize("rent_friends", "postgres", "Ostap123", {
  dialect: "postgres",
  port: 5432,
  host: "localhost",
  define: {
    timestamps: false,
  },
});
