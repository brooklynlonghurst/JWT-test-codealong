const express = require("express");
const ViteExpress = require("vite-express");
const {login} = require('./controllers/authController')

const app = express();

app.get("/hello", (req, res) => {
  res.send("Hello Vite + React!");
});

app.post('/api/login', login)

ViteExpress.listen(app, 3000, () =>
  console.log("Server is listening on port 3000...")
);
