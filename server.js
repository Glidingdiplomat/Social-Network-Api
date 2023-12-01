const express = require("express");
const db = require("./config/connections");
const routes = require("./routes");
// setting up environment variables
const PORT = process.env.PORT || 3001;
const app = express();
// we are using middleware to parse incoming data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// this is to using routes to defined in routes.js
app.use(routes);
// connecting to the mongoDb database and to start the server
db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});
