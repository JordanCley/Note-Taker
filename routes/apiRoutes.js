const path = require("path");
const fs = require("fs");

var tableArray = [
  {
    customerName: "Ahmed",
    customerEmail: "ahmed@example.com",
    customerID: "afhaque89",
    phoneNumber: "000-000-0000"
  }
];

module.exports = app => {
  app.get("/api/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "../db/db.json"));
    // let notes = path.join(__dirname, "../db/db.json");
    // fs.readFile(notes, (err, data) =>{
    //     if (err) throw err;
    //     res.json(data);

    // })
    // console.log(req.params.body);
  });
};
