const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
const port = process.env.PORT || 8000;

app.use(bodyParser.urlencoded({extended: true }));
app.use(bodyParser.json());
app.use("/",express.static(path.join(__dirname + "/dist")));


require("./server/config/database");
app.use("/api",require("./server/routes/index"));

app.listen(port,()=>{ console.log("listening on port" + port)});
