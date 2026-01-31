const { Router } = require ("express");
const {createUser} = require ("../controllers/user.controller");

const router = Router();

//criação do usuario
router.post("/users", createUser);

module.exports = router;