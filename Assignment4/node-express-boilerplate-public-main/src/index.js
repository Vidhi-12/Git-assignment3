const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const port = 3000

/*********************** */
const path = require("path");

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
/****************** */

app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());


app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())
// your code goes here

app.get("/", (req,res) => {
    // res.write("Hello");
    res.render("calculator.ejs");
    // res.end();
})

app.post("/add", (req,res) => {
    let num1 = req.body.num1;
    let num2 = req.body.num2;
    const operator = req.body.operator;
    
    let sum = Number(num1) + Number(num2);

    if(Number(num1) < -1000000 || Number(num2) < -1000000 || sum < -1000000){
        res.json({
            status: "error",
            message: "Underflow", 
            sum: sum
        })
    }
    else if(Number(num1) > 1000000 || Number(num2) > 1000000 || sum > 1000000){
        res.json({
            status: "error",
            message: "Overflow", 
            sum: sum
        })
    }
    else if(isNaN(num1) || isNaN(num2)){
        res.json({
            status: "error",
            message: "Invalid data types", 
            sum: sum
        })
    }
    else{
        res.json({
            status: "success",
            message: "the sum of given two numbers", 
            sum: sum
        })
    }
})

app.post("/sub", (req,res) => {
    let num1 = req.body.num1;
    let num2 = req.body.num2;
    const operator = req.body.operator;
    // console.log(req.body);
    let difference = Number(num1) - Number(num2);

    if(Number(num1) < -1000000 || Number(num2) < -1000000 || difference < -1000000){
        res.json({
            status: "error",
            message: "Underflow", 
            difference: difference
        })
    }
    else if(Number(num1) > 1000000 || Number(num2) > 1000000 || difference > 1000000){
        res.json({
            status: "error",
            message: "Overflow", 
            difference: difference
        })
    }
    else if(isNaN(num1) || isNaN(num2)){
        res.json({
            status: "error",
            message: "Invalid data types", 
            difference: difference
        })
    }
    else{
        res.json({
            status: "success",
            message: "the difference of given two numbers", 
            difference: difference
        })
    }
    
})

app.post("/multiply", (req,res) => {
    
    let num1 = req.body.num1;
    let num2 = req.body.num2;
    const operator = req.body.operator;
    // console.log(req.body);
    let multiply = Number(num1) * Number(num2);

    if(Number(num1) < -1000000 || Number(num2) < -1000000 || multiply < -1000000){
        res.json({
            status: "error",
            message: "Underflow", 
            result: multiply
        })
    }
    else if(Number(num1) > 1000000 || Number(num2) > 1000000 || multiply > 1000000){
        res.json({
            status: "error",
            message: "Overflow", 
            result: multiply
        })
    }
    else if(isNaN(num1) || isNaN(num2)){
        res.json({
            status: "error",
            message: "Invalid data types", 
            result: multiply
        })
    }
    else{
        res.json({
            status: "success",
            message: "The product of given numbers", 
            result: multiply
        })
    }
    
})

app.post("/divide", (req,res) => {
    let num1 = req.body.num1;
    let num2 = req.body.num2;
    const operator = req.body.operator;
    // console.log(req.body);
    let divide = Number(num1) / Number(num2);

    if(Number(num2) == 0){
        res.json({
            status: "error",
            message: "Cannot divide by zero", 
            result: divide
        })
    }
    else if(Number(num1) < -1000000 || Number(num2) < -1000000 || divide < -1000000){
        res.json({
            status: "error",
            message: "Underflow", 
            result: divide
        })
    }
    else if(Number(num1) > 1000000 || Number(num2) > 1000000 || divide > 1000000){
        res.json({
            status: "error",
            message: "Overflow", 
            result: divide
        })
    }
    else if(isNaN(num1) || isNaN(num2)){
        res.json({
            status: "error",
            message: "Invalid data types", 
            result: divide
        })
    }
    else{
        res.json({
            status: "success",
            message: "The division of given numbers", 
            result: divide
        })
    }
    
})

app.get("*", (req, res) => {
    res.status(404).send("Invalid request");
})

app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app;