const express = require("express");
const ControllerUser = require("../controllers/user");

const router = express.Router();

router.post("/", ControllerUser.CreateUser);
router.post("/login", ControllerUser.Login);

router.get("/", ControllerUser.GetUsers);
router.get("/:id", ControllerUser.GetUser);
router.put("/:id", ControllerUser.UpdateUser);
router.delete("/:id", ControllerUser.DeleteUser);

module.exports = router;
