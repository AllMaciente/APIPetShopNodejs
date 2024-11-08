const database = require("../config/database");

class ModelCliente {
  constructor() {
    this.model = database.db.define("cliente", {
      id: {
        type: database.db.Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nome: {
        type: database.db.Sequelize.STRING,
      },
      telefone: {
        type: database.db.Sequelize.STRING,
        unique: true,
      },
    });
  }
}

module.exports = new ModelCliente().model; // Exporta o modelo diretamente
