const express = require("express");
const ControllerCliente = require("../controllers/cliente");

const router = express.Router();

router.get("/", ControllerCliente.GetClients);
router.get("/:id", ControllerCliente.GetCliente);
router.post("/", ControllerCliente.CreateCliente);
router.put("/:id", ControllerCliente.UpdatePessoa);
router.delete("/:id", ControllerCliente.DeletePessoa);

module.exports = router;
