// models/index.js
const ModelCliente = require("./cliente");
const ModelCachorro = require("./cachorro");

// Inicialize associações
ModelCliente.associate({ ModelCachorro });
ModelCachorro.associate({ ModelCliente });

// Exporte os modelos para uso em outras partes da aplicação
module.exports = {
  ModelCliente,
  ModelCachorro,
};
