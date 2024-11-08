const { Sequelize } = require("sequelize");

class Database {
  constructor() {
    this.init();
  }

  async init() {
    this.db = new Sequelize({
      database: process.env.DB_NAME || "petshop",
      host: process.env.DB_HOST || "localhost",
      username: process.env.DB_USER || "root",
      dialect: "mysql",
      password: process.env.DB_PASSWORD || "root_password",
      port: process.env.DB_PORT || 3307,
    });
  }
}

module.exports = new Database();
