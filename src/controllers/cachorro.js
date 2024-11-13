const ServiceCachorro = require("../services/cachorro");

class ControllerCachorro {
  // Helper function to check roles
  checkRolePermission(req, res, requiredRoles) {
    if (!requiredRoles.includes(req.user.role)) {
      return res.status(403).send({
        msg: "Clientes nao tem aceso a essa função",
      });
    }
    return null; // No issues with role, can proceed
  }

  async GetCachorros(req, res) {
    try {
      // Check if the role has permission to access this function
      const permissionError = this.checkRolePermission(req, res, [0, 2]);
      if (permissionError) return permissionError;

      const cachorro = await ServiceCachorro.GetCachorros();
      res.send({ msg: cachorro });
    } catch (error) {
      res.status(500).send({ msg: error.message });
    }
  }

  async GetCachorro(req, res) {
    try {
      const id = req.params.id;
      const cachorro = await ServiceCachorro.GetCachorro(id); // Await the result

      // Check if the client has permission to access this cachorro
      if (req.user.role === 1 && req.user.clienteId !== cachorro.clienteId) {
        return res.status(403).send({
          msg: "Clientes nao tem aceso a informações de outro usuário",
        });
      }

      res.send({ msg: cachorro });
    } catch (error) {
      res.status(500).send({ msg: error.message });
    }
  }

  async CreateCachorro(req, res) {
    try {
      // Check if the role has permission to access this function
      const permissionError = this.checkRolePermission(req, res, [0, 2]);
      if (permissionError) return permissionError;

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
      const dog = await ServiceCachorro.GetCachorro(id); // Await the result

      // Check if the client has permission to update this cachorro
      if (req.user.role === 1 && req.user.clienteId !== dog.clienteId) {
        return res.status(403).send({
          msg: "Clientes nao tem aceso a informações de outro usuário",
        });
      }

      const { nome, idade, raca, clienteId } = req.body;
      const updatedCachorro = await ServiceCachorro.UpdateCachorro(
        id,
        nome,
        idade,
        raca,
        req.user.role === 1 ? req.user.clienteId : clienteId
      );

      res.send({ msg: updatedCachorro });
    } catch (error) {
      res.status(500).send({ msg: error.message });
    }
  }

  async DeleteCachorro(req, res) {
    try {
      const id = req.params.id;
      const dog = await ServiceCachorro.GetCachorro(id); // Await the result

      // Check if the client has permission to delete this cachorro
      if (req.user.role === 1 && req.user.clienteId !== dog.clienteId) {
        return res.status(403).send({
          msg: "Clientes nao tem aceso a informações de outro usuário",
        });
      }

      await ServiceCachorro.DeleteCachorro(id);
      res.status(204).send();
    } catch (error) {
      res.status(500).send({ msg: error.message });
    }
  }
}

module.exports = new ControllerCachorro();
