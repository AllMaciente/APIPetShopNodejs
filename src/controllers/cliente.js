const ServiceClient = require("../services/cliente");

class ControllerClient {
  async GetClients(req, res) {
    try {
      const clients = await ServiceClient.GetClients();
      res.send({ msg: clients });
    } catch (error) {
      res.status(500).send({ msg: error.message });
    }
  }
}
module.exports = new ControllerClient();
