// GLOBAL CONSTENTS
const express = require("express");
const app = express();
const fs = require("fs");

// SETS PORT TO VAR
const PORT = process.env.PORT || 3000;

// HANDLE DATA PARSING
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

// REQUIREING ROUTES
require("./routes/apiRoutes.js")(app);
require("./routes/htmlRoutes.js")(app);


// LISTENING FOR PORT
app.listen(PORT, () => {
    console.log(`Server started on port: ${PORT}`);
});