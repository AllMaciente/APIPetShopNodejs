const { ModelCliente } = require("../models"); // Corrija o caminho se necessário

class ServiceCliente {
  async GetClientes() {
    return ModelCliente.findAll(); // Usa diretamente o modelo exportado
  }
  async CreateCliente(nome, telefone) {
    if (!nome || !telefone) {
      throw new Error("favor preacher todos os dados");
    }
    return ModelCliente.create({ nome, telefone });
  }

  async UpdateCliente(id, nome, telefone) {
    if (!id) {
      throw new Error("Favor informar o Id");
    }
    const cliente = await ModelCliente.findByPk(id);
    if (!cliente) {
      throw new Error("Cliente nao encontrado");
    }
    cliente.nome = nome || cliente.nome;
    cliente.telefone = telefone || cliente.telefone;

    cliente.save();
    return cliente;
  }
  async DeletePessoa(id) {
    if (!id) {
      throw new Error("Favor informar o Id");
    }
    const cliente = await ModelCliente.findByPk(id);
    if (!cliente) {
      throw new Error("Cliente não encontrada");
    }
    return cliente.destroy();
  }
}

module.exports = new ServiceCliente();
