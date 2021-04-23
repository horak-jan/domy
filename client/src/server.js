require("dotenv").config({ path: __dirname + "/.env" });

const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
var bodyParser = require("body-parser");

const DIST_DIR = path.resolve("public/build/");

const connUri = process.env.MONGO_URI;
let PORT = process.env.PORT || 3000;

const app = express();
app.use(bodyParser.json());

mongoose.promise = global.Promise;
mongoose.connect(connUri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once("open", () => console.log("MongoDB --  database connected"));
connection.on("error", (err) => {
  console.log("MongoDB connection error. " + err);
  process.exit();
});

require("./routes/index")(app);
app.use(express.static(DIST_DIR));

app.get("/*", function (req, res) {
  res.sendFile(path.join(DIST_DIR, "/index.html"), function (err) {
    if (err) {
      res.status(500).send(err);
    }
  });
});

app.listen(PORT, () =>
  console.log("Server running on http://localhost:" + PORT + "/")
);
