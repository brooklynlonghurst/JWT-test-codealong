const express = require("express");
const ViteExpress = require("vite-express");
const {login, test} = require('./controllers/authController')

const app = express();
app.use(express.json())

app.get("/hello", (req, res) => {
  res.send("Hello Vite + React!");
});

app.post('/api/login', login)
app.post('api/test', test)

ViteExpress.listen(app, 3000, () =>
  console.log("Server is listening on port 3000...")
);
