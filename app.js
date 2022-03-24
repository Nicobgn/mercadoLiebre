const express = require("express");
const path = require("path");
const app = express();
const bRoot = path.join(__dirname, "/views/");
const PORT = process.env.PORT || 3000;

//  Settings
app.set('views',bRoot);
app.use(express.static('public'));

//  Middlewares
app.use((req, res, next) => {
  console.log(`En ${req.url} se utilizó ${req.method}`);
  next();
});

//  Routes
app.get("/", (req, res) => {
  res.sendFile(bRoot + "/index.html");
});
app.get("/login", (req, res) => {
  res.sendFile(bRoot + "/login.html");
});
app.get("/register", (req, res) => {
  res.sendFile(bRoot + "/register.html");
});

//  Start Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
