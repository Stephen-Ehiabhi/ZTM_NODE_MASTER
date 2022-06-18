const { planets } = require("../../models/planets.model")

const getPlanets = (req,res) => {
  return res.status(200).json(planets);
};

const getSinglePlanets = (req,res) => {
  console.log("Single planets");
};

module.exports = {
  getPlanets,
  getSinglePlanets,
};
