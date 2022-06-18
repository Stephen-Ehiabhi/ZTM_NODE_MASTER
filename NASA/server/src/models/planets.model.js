const { parse } = require("csv-parse");
const fs = require("fs");
const Path = require("path");
const habitablePlanets = [];

/*IT IS GOOD IDEA TO STREAM LARGE DATA SETS, NODE IS VERY GOOD FOR STREAMING DATA
 */

function isHabitable(data) {
  const { koi_disposition, koi_insol, koi_prad } = data;
  if (
    koi_disposition == "CONFIRMED" &&
    koi_insol > 0.36 &&
    koi_insol < 1.11 &&
    koi_prad < 1.6
  ) {
    habitablePlanets.push(data);
  }
  return;
}

const loadPlanetData = () => {
  return new Promise((resolve, reject) => {
    fs.createReadStream(Path.join(__dirname, "..", "..", 'data', 'kepler_data.csv'))
      .pipe(
        parse({
          comment: "#",
          columns: true,
        })
      )
      .on("data", (data) => {
        isHabitable(data);
      })
      .on("error", (err) => {
        console.error(err);
        reject(error);
      })
      .on("end", () => {
        console.table(habitablePlanets.map((result) => result.kepler_name));
        console.log();
        console.info(`${habitablePlanets.length} Habitable Planets found!`);
        resolve();
      });
  });
};

module.exports = {
  loadPlanetData,
  planets: habitablePlanets,
};
