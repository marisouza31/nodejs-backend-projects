const prisma = require("../prisma/client");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

async function login(req, res) {
  console.log("BODY LOGIN:", req.body);
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      error: "Email e senha são obrigatórios",
    });
  }

  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (!user) {
    return res.status(401).json({ error: "Credenciais inválidas" });
  }

  const passwordMatch = await bcrypt.compare(password, user.password);

  if (!passwordMatch) {
    return res.status(401).json({ error: "Credenciais inválidas" });
  }

  const token = jwt.sign(
    { id: user.id },
    process.env.JWT_SECRET,
    { expiresIn: "1d" }
  );

  return res.json({
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
    },
    token,
  });
}

module.exports = { login };
