const express = require("express");
const ControllerUser = require("../controllers/user");
const auth = require("../middleware/auth");

const router = express.Router();

router.post("/", ControllerUser.CreateUser);
router.post("/login", ControllerUser.Login);

router.get("/",auth, ControllerUser.GetUsers);
router.get("/:id",auth, ControllerUser.GetUser);
router.put("/:id",auth, ControllerUser.UpdateUser);
router.delete("/:id",auth, ControllerUser.DeleteUser);

module.exports = router;
