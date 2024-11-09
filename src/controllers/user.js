const ServiceUser = require("../services/user");

class ControllerUser {
  async GetUsers(req, res) {
    try {
      const users = await ServiceUser.GetUsers();
      res.send({ msg: users });
    } catch (e) {
      res.status(500).send({ msg: e.message });
    }
  }
  async GetUser(req, res) {
    try {
      const id = req.params.id;

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
      res.msg({ msg: user });
    } catch (e) {
      res.status(500).send({ msg: e.message });
    }
  }
  async UpdateUser(req, res) {
    try {
      const id = req.params.id;
      const { email, senha, clienteId, role } = req.body;

      const user = await ServiceUser.UpdateUser(
        id,
        email,
        senha,
        clienteId,
        role
      );

      res.msg({ msg: user });
    } catch (e) {
      res.status(500).send({ msg: e.message });
    }
  }
  async DeleteUser(req, res) {
    const id = req.params.id;
    await ServiceUser.DeleteUser(id);
    res.status(204).send();
    try {
    } catch (e) {
      res.status(500).send({ msg: e.message });
    }
  }
  async Login(req, res) {
    try {
      const { email, password } = req.body;
      const token = await ServicePessoa.Login(email, password);
      res.status(200).send({ token });
    } catch (error) {
      res.status(500).send({ msg: error.message });
    }
  }
}

module.exports = new ControllerUser();
