const express = require("express");
const ControllerCachorro = require("../controllers/cachorro");

const router = express.Router();

router.get("/", ControllerCachorro.GetCachorros);
router.get("/:id", ControllerCachorro.GetCachorro);
router.post("/", ControllerCachorro.CreateCachorro);
router.put("/:id", ControllerCachorro.UpdateCachorro);
router.delete("/:id", ControllerCachorro.DeleteCachorro);

module.exports = router;
