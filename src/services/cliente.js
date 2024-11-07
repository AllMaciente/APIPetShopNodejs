const { ModelClientes } = require("../models");

class ServiceClient {
  async GetClients() {
    return ModelClientes.model.findAll();
  }
}

module.exports = new ServiceClient();
