//jshint esversion:6

const express = require('express');
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

const port = 3000;

app.get("/", function(req,res){
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req,res){

    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);

    var result = num1 + num2;

    res.send("Result is " + result);
});

app.get("/bmicalculator", function(req,res){
    res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmicalculator", function(req,res){

    var h = parseFloat(req.body.height);
    var w = parseFloat(req.body.weight);

    var bmi = w/(h*h);

    res.send("Calculated BMI is " + bmi);
});

app.listen(port, () => {
    console.log('Server is running at port 3000');
});