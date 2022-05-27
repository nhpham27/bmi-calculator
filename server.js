const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res) {
    var weight = Number(req.body.weight);
    var height = Number(req.body.height);

    var bmi = weight/Math.pow(height, 2);

    res.send("Your BMI is: " + bmi);
});

app.listen(8000, function() {
    console.log("Server is running on port 8000");
});