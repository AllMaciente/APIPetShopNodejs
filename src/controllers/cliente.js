const ServiceCliente = require("../services/cliente");

class ControllerCliente {
  // Função auxiliar para verificar permissões
  checkPermissions(req, res, id = null) {
    if (req.user.role === 0 || req.user.role === 2) {
      return true; // Permissão concedida
    }

    if (req.user.role === 1) {
      if (id && req.user.clienteId !== id) {
        return res.status(403).send({
          msg: "Clientes não têm acesso a informações de outro usuário.",
        });
      }
      return true; // Permissão concedida para o próprio cliente
    }

    // Caso nenhum role válido seja encontrado
    return res.status(403).send({ msg: "Acesso negado." });
  }

  async GetClients(req, res) {
    try {
      if (!this.checkPermissions(req, res)) return;

      const clientes = await ServiceCliente.GetClientes();
      res.send({ msg: clientes });
    } catch (error) {
      res.status(500).send({ msg: error.message });
    }
  }

  async GetCliente(req, res) {
    try {
      const id = req.params.id;

      if (!this.checkPermissions(req, res, id)) return;

      const cliente = await ServiceCliente.GetCliente(id);
      res.send({ msg: cliente });
    } catch (error) {
      res.status(500).send({ msg: error.message });
    }
  }

  async GetClienteDogs(req, res) {
    try {
      const id = req.params.id;

      if (!this.checkPermissions(req, res, id)) return;

      const dogs = await ServiceCliente.GetClienteDogs(id);
      res.send({ msg: dogs });
    } catch (error) {
      res.status(500).send({ msg: error.message });
    }
  }

  async CreateCliente(req, res) {
    try {
      if (!this.checkPermissions(req, res)) return;

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

      if (!this.checkPermissions(req, res, id)) return;

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

      if (!this.checkPermissions(req, res, id)) return;

      await ServiceCliente.DeletePessoa(id);
      res.status(204).send();
    } catch (error) {
      res.status(500).send({ msg: error.message });
    }
  }
}

module.exports = new ControllerCliente();
