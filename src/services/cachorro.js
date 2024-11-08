const { ModelCachorro } = require("../models"); // Corrija o caminho se necessário

class ServiceCachorro {
  async GetCachorros() {
    return ModelCachorro.findAll(); // Usa diretamente o modelo exportado
  }
  async GetCachorro(id) {
    if (!id || isNaN(id)) {
      throw new Error("Favor informar o Id");
    }
    const cliente = await ModelCachorro.findByPk(parseInt(id));
    if (!cliente) {
      throw new Error("Cachorro nao encontrado");
    }
    return cliente;
  }
  async CreateCachorro(nome, idade, raca, clienteId) {
    if (!id || isNaN(id)) {
      throw new Error("Favor informar o Id");
    }
    return ModelCachorro.create({ nome, idade, raca, clienteId });
  }
  async UpdateCachorro(id, nome, idade, raca, clienteId) {
    if (!id || isNaN(id)) {
      throw new Error("Favor informar o Id");
    }
    const cachorro = await ModelCachorro.findByPk(parseInt(id));
    if (!cliente) {
      throw new Error("Cachorro nao encontrado");
    }
    cachorro.nome = nome || cachorro.nome;
    cachorro.idade = idade || cachorro.idade;
    cachorro.idade = raca || cachorro.raca;
    cachorro.idade = clienteId || cachorro.clienteId;

    cachorro.save();
    return cachorro;
  }
  async DeleteCachorro(id) {
    if (!id || isNaN(id)) {
      throw new Error("Favor informar o Id");
    }
    const cachorro = await ModelCachorro.findByPk(parseInt(id));
    if (!cachorro) {
      throw new Error("cachorro não encontrada");
    }
    return cachorro.destroy();
  }
}

module.exports = new ServiceCachorro();
