const prisma = require("../prisma/client");
const bcrypt = require("bcrypt");

async function createUser(req, res) {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({
      error: "Nome, email e senha são obrigatórios",
    });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
      select: {
        id: true,
        name: true,
        email: true,
      },
    });

    return res.status(201).json(user);
  } catch (error) {
    console.log("ERRO USER:", error);
    return res.status(400).json({ error: "Erro ao criar usuário" });
  }
}

async function listUsers(req, res) {
  try {
    const users = await prisma.user.findMany({
      select: {
        id: true,
        name: true,
        email: true,
      },
    });

    return res.json(users);
  } catch (error) {
    return res.status(500).json({ error: "Erro ao listar usuários" });
  }
}

module.exports = { createUser, listUsers };
