const express = require("express");
const app = express();
const port = 4035;

app.use(express.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
});

app.use((req, res, next) => {
  let ip =
    req.headers["x-forwarded-for"] ||
    req.connection.remoteAddress.split(`:`).pop();
  console.log(`[${req.method}] request on ${req.originalUrl} from ${ip}`);
  next();
});

app.use("/", require("./routes"));

app.listen(port, () => {
  console.log("Started! On port: " + PORT);
});
