require("dotenv").config();
const express = require("express");

const app = express();
app.use(express.json());

/*const cookies = require("cookie-parser");
app.use(cookies());

const memberRoutes = require("./routes/memberRoutes");
app.use("/auth", memberRoutes);*/

const listener = app.listen(process.env.PORT, process.env.HOST, () => {
  console.log(`Server listening at ${listener.address().address}:${listener.address().port}`);
});