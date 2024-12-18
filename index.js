const express = require("express");
const routerCliente = require("./src/routers/cliente");
const routerCachorro = require("./src/routers/cachorro");
const routerUser = require("./src/routers/user");
const database = require("./src/config/database");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use("/cliente", routerCliente);
app.use("/cachorro", routerCachorro);
app.use("/user", routerUser);

const PORT = 3000;

database.db
  .sync({ force: false })
  .then((_) => {
    console.info("Banco conectado com sucesso");
    app.listen(PORT, () => {
      console.info(`Servidor rodando na porta ${PORT}`);
    });
  })
  .catch((e) => {
    console.error(`Conexão falhou: ${e}`);
  });
