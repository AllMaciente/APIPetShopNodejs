const ServiceCliente = require("../services/cliente");

class ControllerCliente {
  async GetClients(req, res) {
    try {
      const clientes = await ServiceCliente.GetClientes();
      res.send({ msg: clientes });
    } catch (error) {
      res.status(500).send({ msg: error.message });
    }
  }
}
module.exports = new ControllerCliente();
