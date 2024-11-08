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
  async GetCliente(req, res) {
    try {
      const id = req.params.id;

      const cliente = await ServiceCliente.GetCliente(id);

      res.send({ msg: cliente });
    } catch (error) {
      res.status(500).send({ msg: error.message });
    }
  }

  async CreateCliente(req, res) {
    try {
      const { nome, telefone } = req.body;

      const cliente = await ServiceCliente.CreateCliente(nome, telefone);
      res.send({ msg: cliente });
    } catch (error) {
      res.status(500).send({ msg: error.message });
    }
  }
  async UpdatePessoa(req, res) {
    try {
      const id = req.params.id;
      const { nome, telefone } = req.body;

      const cliente = await ServiceCliente.UpdateCliente(id, nome, telefone);

      res.send({ msg: cliente });
    } catch (error) {
      res.status(500).send({ msg: error.message });
    }
  }
  async DeletePessoa(req, res) {
    try {
      const id = req.params.id;
      await ServiceCliente.DeletePessoa(id);
      res.status(204).send();
    } catch (error) {
      res.status(500).send({ msg: error.message });
    }
  }
}
module.exports = new ControllerCliente();
