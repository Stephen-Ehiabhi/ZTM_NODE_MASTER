const planetsRouter = require("express").Router();
const {
  getPlanets,
  getSinglePlanets,
} = require("./planets.controller");

planetsRouter.get("/", getPlanets);

planetsRouter.get("/:id", getSinglePlanets);

module.exports = planetsRouter;
