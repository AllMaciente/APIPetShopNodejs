const ServiceUser = require("../services/user");

class ControllerUser {
  // Função auxiliar para verificar permissões
  checkPermissions(req, res, id = null) {
    if (req.user.role === 0 || req.user.role === 2) {
      return true; // Permissão concedida para admin e superadmin
    }

    if (req.user.role === 1) {
      if (id && req.user.id !== id) {
        return res.status(403).send({
          msg: "Clientes não têm acesso às informações de outro usuário.",
        });
      }
      return true; // Permissão concedida para o próprio cliente
    }

    // Caso nenhum role válido seja encontrado
    return res.status(403).send({ msg: "Acesso negado." });
  }

  async GetUsers(req, res) {
    try {
      if (!this.checkPermissions(req, res)) return;

      const users = await ServiceUser.GetUsers();
      res.send({ msg: users });
    } catch (e) {
      res.status(500).send({ msg: e.message });
    }
  }

  async GetUser(req, res) {
    try {
      const id = req.params.id;

      if (!this.checkPermissions(req, res, id)) return;

      const user = await ServiceUser.GetUser(id);
      res.send({ msg: user });
    } catch (e) {
      res.status(500).send({ msg: e.message });
    }
  }

  async CreateUser(req, res) {
    try {
      const { email, senha, clienteId = 0, role = 1 } = req.body;

      const user = await ServiceUser.CreateUser(email, senha, clienteId, role);
      res.send({ msg: user }); // Corrigido de res.msg para res.send
    } catch (e) {
      res.status(500).send({ msg: e.message });
    }
  }

  async UpdateUser(req, res) {
    try {
      const id = req.params.id;

      if (!this.checkPermissions(req, res, id)) return;

      const { email, senha, clienteId, role } = req.body;

      const user = await ServiceUser.UpdateUser(
        id,
        email,
        senha,
        clienteId,
        role
      );
      res.send({ msg: user }); // Corrigido de res.msg para res.send
    } catch (e) {
      res.status(500).send({ msg: e.message });
    }
  }

  async DeleteUser(req, res) {
    try {
      const id = req.params.id;

      if (!this.checkPermissions(req, res, id)) return;

      await ServiceUser.DeleteUser(id);
      res.status(204).send(); // Resposta com status 204 para deletar
    } catch (e) {
      res.status(500).send({ msg: e.message });
    }
  }

  async Login(req, res) {
    try {
      const { email, password } = req.body;
      const token = await ServiceUser.Login(email, password); // Corrigido de ServicePessoa para ServiceUser
      res.status(200).send({ token });
    } catch (error) {
      res.status(500).send({ msg: error.message });
    }
  }
}

module.exports = new ControllerUser();
