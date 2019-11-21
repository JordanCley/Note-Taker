const path   = require("path");
const router = require("express").Router();

// GET ROUTE SENDING NOTES.HTML
router.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/notes.html"));
});

// GET ROUTE (CATCH-ALL) SENDING INDEX.HTML
router.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
  console.log("get was made");
});

module.exports = router;
