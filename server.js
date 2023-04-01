const jsonServer = require("json-server");
const fs = require("fs");
const server = jsonServer.create();
const router = jsonServer.router("./db.json");
const db = JSON.parse(fs.readFileSync("./db.json", "UTF-8").toString());
const middlewares = jsonServer.defaults();
const cors = require("cors");

server.get("/service-provider", (req, res) => {
  const { query } = req;

  try {
    let results = db["service-provider"];
    const {
      specialty = "",
      province = "",
      _page = 1,
      _limit = 10,
      _sortBy = "",
    } = query;
    if (specialty || province) {
      if (specialty) {
        results = results.filter((el) => el.serviceType === specialty);
      }
      if (province) {
        results = results.filter((el) => el.province === province);
      }
    }
    const pages = Math.ceil(results.length / _limit);
    const from = (Number(_page) - 1) * Number(_limit);
    const to = Number(_page) * Number(_limit);
    results = results.slice(from, to);
    return res.json({ results, pages }).status(200);
  } catch (err) {
    console.log(err);
    return res.sendStatus(500).json(err);
  }
});

server.use(middlewares);
server.use(cors());
server.use(router);

server.listen(3004, () => {
  console.log("JSON Server is running");
});
