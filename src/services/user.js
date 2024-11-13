const { Model } = require("sequelize");
const { ModelUser } = require("../models");

class serviceUser {
  async GetUsers() {
    return ModelUser.findAll();
  }
  async GetUser(id) {
    if (!id || isNaN(id)) {
      throw new Error("Informe um Id");
    }
    const user = await ModelUser.findByPk(parseInt(id));
    if (!user) {
      throw new Error("O Usuário nao foi encontrado");
    }
    return user;
  }
  async CreateUser(email, senha, clienteID = 0, role = 1) {
    if (!email || !senha) {
      throw new Error("Favor preacher todos os dados");
    }
    return ModelUser.create({ email, senha, clienteID, role });
  }
  async UpdateUser(id, email, senha, clienteID, role) {
    if (!id || isNaN(id)) {
      throw new Error("Informar um Id");
    }
    const user = await ModelUser.findByPk(parseInt(id));
    if (!user) {
      throw new Error("usuário nao encontrado");
    }
    user.email = email || user.email;
    user.email = senha || user.senha;
    user.email = clienteID || user.clienteID;
    user.email = role || user.role;

    user.save;
    return user;
  }
  async DeleteUser(id) {
    if (!id) {
      throw new Error("Favor informar um Id");
    }
    const user = await ModelUser.findByPk(id);
    if (!user) {
      throw new Error("usuario nao encontrado");
    }
    return user.destroy();
  }
  async Login(email, password) {
    if (!email || !password) {
      throw new Error("Email ou senha inválido!");
    }

    const user = await ModelUser.findOne({ where: { email } });

    if (!user) {
      throw new Error("Email ou senha inválido!");
    }

    const senhaValida = bcrypt.compare(password, user.senha);

    if (!senhaValida) {
      throw new Error("Email ou senha inválido!");
    }

    const payload = {
      id: user.id,
      email: user.email,
      senha: user.senha,
      clienteId: user.clienteId,
      role: user.role,
    };
    return jwt.sign(payload, "segredo", { expiresIn: 60 * 60 });
  }
}

module.exports = new serviceUser();
