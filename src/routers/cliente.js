const express = require("express");
const ControllerCliente = require("../controllers/cliente");

const router = express.Router();

router.get("/", ControllerCliente.GetClients);

module.exports = router;
