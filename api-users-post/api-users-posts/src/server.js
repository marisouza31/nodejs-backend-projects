const express = require("express");
require("dotenv").config();

const userRoutes = require("./routes/user.routes");
const postRoutes = require("./routes/post.routes");
const authRoutes = require("./routes/auth.routes");

const app = express();

app.use(express.json()); 

app.use("/users", userRoutes);
app.use("/posts", postRoutes);
app.use(authRoutes); 

app.listen(3333, () => {
  console.log("Servidor está rodando na porta 3333");
});
