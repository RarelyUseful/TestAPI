"use strict";
const app = require("./app");

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server is listening on port ${port}.`));

//to run locally:
// $ node app.local.js
