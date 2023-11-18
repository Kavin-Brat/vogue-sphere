const express = require("express");
const cors = require("cors");
const router = require("./src/routes/index");
// create express app
const app = express();

app.use(express.urlencoded({ extended: true })); // enable parse for URL-encoded request data
app.use(express.json()); // enable parse for JSON format request data

// enable CORS for all routes with specific options
const corsOpts = {
  origin: "*", // set the allowed origin(s) to "*" allows any origin
};
app.use(cors(corsOpts)); // use the cors middleware for all routes
app.options("*", cors(corsOpts)); // enable pre-flight requests by responding to OPTIONS requests

// api routes
/* app.use("/", router); */

// listening port 8090 - start the server
app.listen(8090, () => {
  console.log("--------------------server started and it's listening to port: 8090--------------------");
});
