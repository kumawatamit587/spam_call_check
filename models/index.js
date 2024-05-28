const { Sequelize } = require("sequelize");
const userModel = require("./user");
const contactModel = require("./contact");
const config = require("../config/config").development;

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  {
    host: config.host,
    dialect: "mysql",
  }
);

const db = {
  Sequelize,
  sequelize,
  User: userModel(sequelize, Sequelize),
  Contact: contactModel(sequelize, Sequelize),
};

db.User.hasMany(db.Contact, { foreignKey: "userId" });
db.Contact.belongsTo(db.User, { foreignKey: "userId" });

module.exports = db;
