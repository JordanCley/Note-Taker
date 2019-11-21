const path = require("path");
const fs = require("fs");
const router = require("express").Router();
let noteArray = [];
let count = 0;

router.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "../db/db.json"));
});

router.post("/notes", (req, res) => {
  let newNote = req.body;
  let db = path.join(__dirname, "../db/db.json");
  fs.readFile(db, "utf8", (err, data) => {
    noteArray = JSON.parse(data);
    noteArray.map(generateID);
    newNote.id = count + 1;
    noteArray.push(newNote);
    let stringArray = JSON.stringify(noteArray);
    fs.writeFile(db, stringArray, err => {
      if (err) throw err;
      console.log("success");
      return res.sendFile(path.join(__dirname, "../public/notes.html"));
    });
  });
});

generateID = () => {
  count++;
};

module.exports = router;
