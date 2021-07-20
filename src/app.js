require('dotenv').config();

const PORT = process.env.PORT || 4000;

const express = require("express");
const app = express();

app.use(express.json());

app.use('/', require('./routes'));

app.listen(PORT, () => {
  console.log("Started! On port: " + PORT);
});