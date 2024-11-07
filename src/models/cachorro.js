const database = require("../config/database");

class ModelCachorro {
  constructor() {
    this.model = database.db.define("cachorro", {
      id: {
        type: database.db.Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nome: {
        type: database.db.Sequelize.STRING,
      },
      idade: {
        type: database.db.Sequelize.INTEGER,
      },
      raca: {
        type: database.db.Sequelize.STRING,
      },
    });
  }

  associate(models) {
    this.model.belongsTo(models.ModelCliente, {
      foreignKey: "clienteId",
      as: "cliente",
    });
  }
}

module.exports = new ModelCachorro().model;
