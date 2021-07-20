require('dotenv').config();

const PORT = process.env.PORT || 4000;

const express = require("express");
const app = express();

app.use(express.json());

// CORS middleware
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', '*');
  res.header('Access-Control-Allow-Headers', '*');
  next();
});

app.use('/', require('./routes'));

app.listen(PORT, () => {
  console.log("Started! On port: " + PORT);
});