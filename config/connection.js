// importing mongoose library
const mongoose = require("mongoose");
// this is connecting to the mongodb database using the mongodb uri provided
//
mongoose.connect(process.env.MONOGDB_URI || "mongodb://localhost:1107/Sir", {
  userNewUrlParser: true,
  useUnifiedTopology: true,
});

// line 11 is exporting the connection to the database as a module
module.exports = mongoose.connection;
