const express = require("express");
const ControllerCliente = require("../controllers/cliente");
const auth = require("../middleware/auth");

const router = express.Router();

router.get("/", auth, ControllerCliente.GetClients);
router.get("/:id", auth, ControllerCliente.GetCliente);
router.get("/:id", auth, ControllerCliente.GetClienteDogs);
router.post("/", auth, ControllerCliente.CreateCliente);
router.put("/:id", auth, ControllerCliente.UpdatePessoa);
router.delete("/:id", auth, ControllerCliente.DeletePessoa);

module.exports = router;
