const ServiceCachorro = require("../services/cachorro");

class ControllerCachorro {
  async GetCachorros(req, res) {
    try {
      const cachorro = await ServiceCachorro.GetCachorros();
      res.send({ msg: cachorro });
    } catch (error) {
      res.status(500).send({ msg: error.message });
    }
  }
  async GetCachorro(req, res) {
    try {
      const id = req.params.id;

      const cachorro = await ServiceCachorro.GetCachorro(id);

      res.send({ msg: cachorro });
    } catch (error) {
      res.status(500).send({ msg: error.message });
    }
  }

  async CreateCachorro(req, res) {
    try {
      const { nome, idade, raca, clienteId } = req.body;

      const cachorro = await ServiceCachorro.CreateCachorro(
        nome,
        idade,
        raca,
        clienteId
      );
      res.send({ msg: cachorro });
    } catch (error) {
      res.status(500).send({ msg: error.message });
    }
  }
  async UpdateCachorro(req, res) {
    try {
      const id = req.params.id;
      const { nome, idade, raca, clienteId } = req.body;

      const cachorro = await ServiceCachorro.UpdateCachorro(
        id,
        idade,
        raca,
        clienteId
      );

      res.send({ msg: cachorro });
    } catch (error) {
      res.status(500).send({ msg: error.message });
    }
  }
  async DeleteCachorro(req, res) {
    try {
      const id = req.params.id;
      await ServiceCachorro.DeleteCachorro(id);
      res.status(204).send();
    } catch (error) {
      res.status(500).send({ msg: error.message });
    }
  }
}
module.exports = new ControllerCachorro();
