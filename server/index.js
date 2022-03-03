// server/server.js
const dataRoutes = require("./routes/dataRoutes");
const batteryRoutes = require("./routes/batteryRoutes");

require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const path = require("path");
// const { dirname } = require("path");
const app = express();

// -------------------------------------Start of middleware---------------
app.use(cors());
app.use(express.json());
app.use(morgan("dev")); // for logging HTTP requests in console


// // if (process.env.NODE_ENV === "production") {
// app.use(express.static(path.join(__dirname, "moonbuggy/build/")));
// // }

// app.use(express.static(path.join(__dirname, "team-tbd-project/build/")));
// -------------------------------------Start of routes---------------
app.use("/api", dataRoutes);
app.use("/api", batteryRoutes);

const PORT = process.env.PORT || 8080;

// //For non static routes
// app.get("*", (req, res) => {
//   // res.sendFile(path.join(__dirname, "team-tbd-project/build/"));
// });


app.listen(PORT, () => {
  console.log(`Server has started on port ${PORT}`);
});