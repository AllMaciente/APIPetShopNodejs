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
      clienteId: {
        // Chave estrangeira para referenciar o dono
        type: database.db.Sequelize.INTEGER,
        references: {
          model: "clientes", // Nome da tabela cliente
          key: "id",
        },
        onDelete: "CASCADE",
      },
    });
  }
}

module.exports = new ModelCachorro().model;
