const express = require("express");

const app = express();

app.use(express.json());//Traduz o json

const userRoutes = require("./routes/user.routes");

app.use(userRoutes);

const authRoutes = require("./routes/auth.routes");

app.use(authRoutes);

const meRoutes = require("./routes/me.routes");

app.use(meRoutes);

app.get("/", (req, res) => {//testando a api
    res.json({ message: "A api esta rodandoo!!"});

});

app.listen(3333, () => {
    console.log("O servidor esta rodando na porta: 3333");
});