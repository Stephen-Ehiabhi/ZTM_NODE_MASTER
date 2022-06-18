const PORT = process.env.PORT || 8888;

const http = require("http");

express = require("express");

const app = express();

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log("Server is listening on port " + PORT);
});
