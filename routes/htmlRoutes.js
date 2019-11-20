const path = require("path");
const router = require("express").Router();



    router.get("/notes", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/notes.html"));
        console.log("get was made");
    });

    router.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/index.html"));
        console.log("get was made");
    });

    module.exports = router;
