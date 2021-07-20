require("dotenv").config();

const PORT = process.env.PORT;

const express = require("express");
const app = express();

app.use(express.json());

// CORS middleware
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
});

// Logging requests
app.use((req, res, next) => {
  let ip =
    req.headers["x-forwarded-for"] ||
    req.connection.remoteAddress.split(`:`).pop();
  console.log(`[${req.method}] request on ${req.originalUrl} from ${ip}`);
  next();
});

app.use("/", require("./routes"));

app.listen(PORT, () => {
  console.log("Started! On port: " + PORT);
});
