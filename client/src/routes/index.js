const path = require("path");
const INDEX = path.resolve("public/build/index.html");

const garden = require("./garden");
const newsletter = require("./newsletter");
const pergola = require("./pergola");
const homeText = require("./homeText");
const house = require("./house");

module.exports = (app) => {
  app.get("/", (req, res) => {
    res.sendFile(INDEX);
  });

  app.use("/api/house", house);
  app.use("/api/garden", garden);
  app.use("/api/pergola", pergola);
  app.use("/api/hometext", homeText);
  app.use("/api/newsletter", newsletter);
};
