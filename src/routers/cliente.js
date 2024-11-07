const express = require("express");
const ControllerClient = require("../controllers/cliente");

const router = express.Router();

router.get("/", ControllerClient.GetClients);

module.exports = router;
