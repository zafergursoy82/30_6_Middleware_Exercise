
import express from "express";
import bodyParser from "body-parser";

import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
  res.send("<h1>Hellooo Everybodyyyyy!!!!</h1>")
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});






// import express from "express";
// import morgan from "morgan";

// const app = express();
// const port = 3000;

// app.use(morgan("combined"));

// app.get("/", (req, res) => {
//   res.send("Hello");
// });

// app.listen(port, () => {
//   console.log(`Listening on port ${port}`);
// });