const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("rent_it_out", "root", "", {
  host: "localhost",
  port: 3306, // XAMPP MySQL port
  dialect: "mysql",
});

const db = {};
db.sequelize = sequelize;
module.exports = db;