const { Router } = require("express");
const authMiddleware = require("../middlewares/auth");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();
const router = Router();

router.get("/me", authMiddleware, async (req, res) => {
  const user = await prisma.user.findUnique({
    where: { id: req.userId },
    select: {
      id: true,
      name: true,
      email: true
    }
  });

  return res.json(user);
});

module.exports = router;
