const express = require("express");
const cors = require("cors");
require("dotenv").config();
const PORT = process.env.PORT || 8090;
const app = express();
app.use(cors());

const survive = require("./library/survive");
const maths = require("./library/maths");

app.get("/survive", survive);

// localhost:8080/maths?num1=6&num2=392
// requrst.query is {"num1":"6","num2":"392"}
app.get("./maths", maths);

app.listen(PORT, () => console.log(`app is running on ${PORT}`));
