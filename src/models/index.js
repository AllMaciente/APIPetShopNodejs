const ModelCliente = require("./cliente");
const ModelCachorro = require("./cachorro");

// Associação de um para muitos
ModelCliente.hasMany(ModelCachorro, { foreignKey: "clienteId" });
ModelCachorro.belongsTo(ModelCliente, { foreignKey: "clienteId" });

module.exports = {
  ModelCachorro,
  ModelCliente,
};
