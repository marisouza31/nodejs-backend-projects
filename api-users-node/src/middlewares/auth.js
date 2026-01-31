const jwt = require("jsonwebtoken");

function authMiddleware(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ error: "Token não informado" });
  }

  const [, token] = authHeader.split(" ");

  try {
    const decoded = jwt.verify(token, "segredo-super-secreto");

    req.userId = decoded.id;

    return next();
  } catch {
    return res.status(401).json({ error: "Token inválido" });
  }
}

module.exports = authMiddleware;
