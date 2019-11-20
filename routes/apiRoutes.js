const path = require("path");
const fs = require("fs");
const router = require("express").Router();
let noteArray = [];


  router.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "../db/db.json"));
  });

  router.post("/notes", (req, res) => {
    let newNote = req.body;
    let db = path.join(__dirname, "../db/db.json");
    fs.readFile(db,"utf8", (err, data)=>{
        // res.writeHead(200, {'Content-Type': 'json'});
        noteArray = JSON.parse(data);
        noteArray.push(newNote);
        let stringArray = JSON.stringify(noteArray);
        console.log(stringArray);
        fs.writeFile(db, stringArray, (err) =>{
            if (err) throw err;
            console.log("success");
        })
    })
  

  });

  module.exports = router;
