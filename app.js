// GLOBAL CONSTENTS
const express = require("express");
const app = express();
const fs = require("fs");
const htmlRoutes = require("./routes/htmlRoutes.js");
const apiRoutes = require("./routes/apiRoutes.js");

// SETS PORT TO VAR
const PORT = process.env.PORT || 3000;

// HANDLE DATA PARSING
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.use(express.static("public"));

// REQUIRING ROUTES
// require("./routes/apiRoutes.js")(app);
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);
// require("./routes/htmlRoutes.js")(app);


// LISTENING FOR PORT
app.listen(PORT, () => {
    console.log(`Server started on port: ${PORT}`);
});