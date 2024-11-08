const { ModelCliente } = require("../models"); // Corrija o caminho se necessário

class ServiceCliente {
  async GetClientes() {
    return ModelCliente.findAll(); // Usa diretamente o modelo exportado
  }
}

module.exports = new ServiceCliente();
