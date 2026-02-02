const { Router } = require("express");
const { createUser, listUsers } = require("../controllers/user.controller");

const router = Router();

router.post("/", createUser);
router.get("/", listUsers); 

module.exports = router;
