const express = require("express");
const app = express();

//middlewares
app.use(express.json());

//import routes
const planets = require("./routes/planets/planets.router")

//routes middleware
app.use("/planets", planets)

module.exports = app;