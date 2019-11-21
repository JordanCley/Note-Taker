const path   = require("path");
const fs     = require("fs");
const router = require("express").Router();
const db     = path.join(__dirname, "../db/db.json");

let noteArray = [];
let count     = 0;

// GET ROUTE RETURNING DB.JSON
router.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "../db/db.json"));
});

// POST ROUTE
router.post("/notes", (req, res) => {
  // SAVING NEW NOTE FROM REQ.BODY TO VARIABLE
  let newNote = req.body;

  // READING CURRENT DB.JSON
  fs.readFile(db, "utf8", (err, data) => {
    // PARSING DATA FROM DB.JSON
    noteArray = JSON.parse(data);

    // MAPPING THROUGH ID AND FOR EACH ELEMENT INCREASING COUNT BY 1
    noteArray.map(generateID);

    // ADD ID PROPERTY TO NEW NOTE OBJECT
    newNote.id = count + 1;

    // PUSHING NEW NOTE INTO NOTEARRAY
    noteArray.push(newNote);

    // ARRAY BACK INTO STRING (JSON)
    let stringArray = JSON.stringify(noteArray);

    // WRITING FILE TO DB PASSING THROUGH RES AND STRINGARRAY
    writeFileToDB(stringArray, res);
  });
});

// DELETE ROUTE
router.delete("/notes/:id", (req, res) => {
  // SAVING CHOSEN ID TO VARIABLE FROM PARAMS OBJECT
  let id = req.params.id;

  // READING CURRENT DB.JSON
  fs.readFile(db, "utf8", (err, data) => {
    
    // PARSING DATA
    noteArray = JSON.parse(data);

    // FILTERING ALL ELEMENTS NOT EQUAL TO CHOSEN ID AND SAVING TO RESULT
    let result = noteArray.filter(note => {
      return note.id != id;
    });

    // TURNING ARRAY BACK INTO STRING
    let stringArray = JSON.stringify(result);

    // PASSING THROUGH ARRAY AND RES TO WRITE TO DB FUNCTIONÍ
    writeFileToDB(stringArray, res);
  });
});

// WRITING TO DB.JSON FUNCTION
writeFileToDB = (dataArray, res) => {
  fs.writeFile(db, dataArray, err => {
    if (err) throw err;
    console.log("success");
    return res.sendFile(path.join(__dirname, "../public/notes.html"));
  });
};

// FUNCTION INCREASING THE COUNT FOR ID BY 1
generateID = () => {
  count++;
};

module.exports = router;
