const { parse } = require("csv-parse");
const fs = require("fs");
const results = [];

/*IT IS GOOD IDEA TO STREAM LARGE DATA SETS, NODE IS VERY GOOD FOR STREAMING DATA
 */

function isHabitable(data) {
  const {koi_disposition, koi_insol, koi_prad } = data;
  if (koi_disposition == "CONFIRMED" && koi_insol > 0.36 && koi_insol < 1.11 && koi_prad < 1.6) {
    results.push(data);
  }
  return;
}

fs.createReadStream("kepler_data.csv")
  .pipe(
    parse({
      comment: "#",
      columns: true,
    })
  )
  .on("data", (data) => {
    isHabitable(data);
  })
  .on("error", (err) => console.error(err))
  .on("end", () => {
    console.table(results.map(result => result.kepler_name));
    console.log();
    console.info(`${results.length} Habitable Planets found!`);
    console.log();
  });
