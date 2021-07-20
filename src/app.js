const express = require("express");
const app = express();

app.use(express.json());

const mainRoute = require("./routes/indexRoute");
const friendRoute = require("./routes/friendRoute");

app.use('/', mainRoute);
app.use('/friends', friendRoute);

app.listen(process.env.PORT, () => {
  console.log("On a port.");
});