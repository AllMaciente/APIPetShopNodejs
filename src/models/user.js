const database = require("../config/database");

class ModelUser {
  constructor() {
    this.model = database.db.define("user", {
      id: {
        type: database.db.Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      email: {
        type: database.db.Sequelize.STRING,
        unique: true,
      },
      senha: {
        type: database.db.Sequelize.STRING,
      },
      clienteId: {
        type: database.db.Sequelize.INTEGER,
        defaultValue: 0,
      },
      role: {
        type: database.db.Sequelize.INTEGER,
      },
    });
  }
}

module.exports = new ModelUser().model;
