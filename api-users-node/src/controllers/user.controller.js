const bcrypt = require("bcrypt");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function createUser(req, res) {
    const { name, email, password } = req.body;

    // verifica se já existe
    const userExists = await prisma.user.findUnique({
        where: { email }
    });

    if (userExists) {
        return res.status(400).json({ error: "Usuário já existente!" });
    }

    // criptografa a senha
    const hashedPassword = await bcrypt.hash(password, 10);

    // salva no banco
    const user = await prisma.user.create({
        data: {
            name,
            email,
            password: hashedPassword
        }
    });

    return res.status(201).json({
        id: user.id,
        name: user.name,
        email: user.email
    });
}

module.exports = { createUser };
