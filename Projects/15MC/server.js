// const express = require("express");
// const Datastore = require("nedb");

// const app = express();
// const database = new Datastore("database.db");

// app.use(express.json());

// const db = new Datastore("database.db");
// db.loadDatabase();

// app.post("/api", (req, res) => {
//   const data = req.body;
//   database.insert(data);
//   res.json({ status: "success", data });
// });

// app.listen(5502, () => {
//   console.log("Server running on http://127.0.0.1:5500");
// });


const express = require("express");
const Datastore = require("nedb");

const app = express();

// Initialize the NeDB database
const database = new Datastore("database.db");
database.loadDatabase();

// Middleware to parse JSON bodies
app.use(express.json());

// Handle POST requests to /api
app.post("/api", (req, res) => {
  const data = req.body;
  const timestamp = Date.now();
  data.timestamp = timestamp;

  // Insert data into the database
  database.insert(data, (err, newDoc) => {
    if (err) {
      res.status(500).json({ status: "error", message: "Failed to save data" });
    } else {
      res.json({ status: "success", data: newDoc });
    }
  });
});

// Start the server
app.listen(5502, () => {
  console.log("Server running on http://127.0.0.1:5500");
});


// app.post("/api", (req, res) => {
//   const data = req.body;
//   const timestamp = Date.now();
//   data.timestamp = timestamp;

//   // Insert data into the database
//   database.insert(data, (err, newDoc) => {
//     if (err) {
//       res.status(500).json({ status: "error", message: "Failed to save data" });
//     } else {
//       res.json({ status: "success", data: newDoc });
//     }
//   });
// });