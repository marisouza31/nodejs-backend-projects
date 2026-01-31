const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function login(req, res) {
  const { email, password } = req.body;

  const user = await prisma.user.findUnique({
    where: { email }
  });

  if (!user) {
    return res.status(400).json({ error: "Email ou senha inválidos" });
  }

  const passwordMatch = await bcrypt.compare(password, user.password);

  if (!passwordMatch) {
    return res.status(400).json({ error: "Email ou senha inválidos" });
  }

  const token = jwt.sign(
    { id: user.id },
    "segredo-super-secreto",
    { expiresIn: "1d" }
  );

  return res.json({ token });
}

module.exports = { login };
