// Dependencies
// =============================================================
const express = require("express");
const path = require("path");
const apiRoutes = require("./routes/api");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
// The extended: true allows for parsing nested objects in the URL
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
// =============================================================
// Serve all static files like CSS, JS, images, etc.
app.use(express.static("public", { extensions: ['html'] }));

app.use("/api", apiRoutes);

// Return all character data
app.get("/view/:character", function (req, res) {
  return res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});
