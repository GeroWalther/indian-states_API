const express = require("express");
const districtRoutes = require("./router/districtRouter");
const stateRoutes = require("./router/stateRouter");
const bodyParser = require("body-parser");

const app = express();
const PORT = 4000;
app.use(bodyParser.json());
app.use("/states", stateRoutes);
app.use("/districts", districtRoutes);

app.get("/", (req, res) => {
  res.send("<h2>Hello world from the indian States and district Server!</h2>");
});

app.listen(PORT, () => {
  console.log("✈️ API is listening on port ", PORT);
});
