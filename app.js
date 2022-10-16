const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const connectDB = require("./config/db");
const exphbs = require("express-handlebars");

dotenv.config({ path: "./config/config.env" });

connectDB();
const app = express();

//only use morgan for development mode
//logging
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
//handlebars
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");
app.set("views", "./views");

const PORT = process.env.PORT || 3000;

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
