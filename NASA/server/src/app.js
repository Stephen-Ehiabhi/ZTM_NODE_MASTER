const express = require("express");
const cors = require("cors")

const app = express();

//middlewares
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:3001',
}))

//import routes
const planets = require("./routes/planets/planets.router")

//routes middleware
app.use("/planets", planets)

module.exports = app;