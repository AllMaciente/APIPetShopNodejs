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

  associate(models) {
    // Um cliente pode ter vários cachorros
    this.model.hasMany(models.ModelCachorro, {
      foreignKey: "clienteId",
      as: "cachorros",
    });
  }
}

module.exports = new ModelCliente().model;
