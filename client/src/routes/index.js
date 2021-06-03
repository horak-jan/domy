const path = require("path");
const INDEX = path.resolve("public/build/index.html");

const garden = require("./garden");
const newsletter = require("./newsletter");
const pergola = require("./pergola");
const homeText = require("./homeText");
const house = require("./house");
const contact = require("./contact");
const address = require("./address");
const presentation = require("./presentation");
const image = require("./image");
const pool = require("./pool");
const basicHouseInfo = require("./basicHouseInfo");

module.exports = (app) => {
  app.get("/", (req, res) => {
    res.sendFile(INDEX);
  });

  app.use("/api/house", house);
  app.use("/api/garden", garden);
  app.use("/api/pergola", pergola);
  app.use("/api/hometext", homeText);
  app.use("/api/contact", contact);
  app.use("/api/address", address);
  app.use("/api/newsletter", newsletter);
  app.use("/api/presentation", presentation);
  app.use("/api/image", image);
  app.use("/api/pool", pool);
  app.use("/api/basicinfo", basicHouseInfo);
};
