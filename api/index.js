const { express, routes } = require("./controller");
const path = require("path");
const port = +process.env.PORT || 3000;
const app = express();

app.use(express.static("./static"));

app.use(express.urlencoded({ extended: false }), routes);

routes.get("^/$|/nodejs_eomp", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./static/html/index.html"));
});

app.listen(port, () => {
  console.log(`You are listening on port ${port}`);
});
