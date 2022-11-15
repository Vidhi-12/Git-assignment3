const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const port = 8080
app.use(express.urlencoded());

const studentArray = require('./InitialData');
const {body, validationResult} = require('express-validator');
const { json } = require('express');

// Parse JSON bodies (as sent by API clients)
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
// your code goes here

//  READ OPERTAION
app.get("/api/student", async (req, res) => {
    try {
        const studentDetails = await studentArray;
        res.status(200).json({
            status: "Success",
            result: studentDetails
        })

    } catch (e) {
        res.status(500).json({
            status: "failed",
            message: e.message
        })
    }
});

//  Read the data for a specific user -- READ OPERTAION
app.get("/api/student/:id",  (req, res) => {
    try {
        const studentDetails =  studentArray.filter((data) => {
            if(data.id == req.params.id) return data;});
        res.status(200).json({
            status: "Success",
            result: studentDetails
        })

    } catch (e) {
        res.status(404).json({
            status: "failed",
            message: e.message
        })
    }
});

// create the data -- CREATE OPERATION
app.post("/api/student", (req, res) => {
    try {
        
        const studentDetails =  ({
            id: studentArray[studentArray.length-1].id +1,
            name:req.body.name,
            currentClass: req.body.currentClass,
            division: req.body.division
            });
            studentArray.push(studentDetails);

            if(req.body.constructor === Object && Object.keys(req.body).length === 3) { 
                res.status(200).json({
                    status: "Success",
                    studentDetails
                })
              }
              else{
                res.status(400).json({
                    status: "failed",
                    message: "Name, Current Class, Division - All are required "
                })
              }
        

    } catch (e) {
        res.status(500).json({
            status: "failed",
            message: e.message
        })
    }
});

app.put("/api/student/:id", async (req, res) => {
    try {

        const index =  studentArray.findIndex((stu) => stu.id == req.params.id);
        id = { id: parseInt(req.params.id) }
        studentArray[index] = {...id, ...req.body};
        const studentDetails = studentArray[index];
        if(index === -1){
            res.status(400).json({
                status: "failed",
                message: "id is invalid"
            })
        }
        else if((typeof req.body.name) != "string"  ||
        (typeof req.body.currentClass) != "number" ||
        (typeof req.body.division) != "string") {
            res.status(400).json({
                status: "failed",
                message: "name and division should be string and current class should be a number"
            })
        }
        else{
            res.status(200).json({
                status: "Success",
                studentDetails
            })
        }
        

    } catch (e) {
        res.status(400).json({
            status: "failed",
            message: e.message
        })
    }
});

app.delete("/api/student/:id", async (req, res) => {
    try {
        const i =  studentArray.findIndex((stu) => stu.id == req.params.id);
        // const studentDetails = await studentArray.filter((data) => {
        //     (data.id != req.params.id)
        // });
        const studentDetails = await studentArray.splice(i,1);
        if(i === -1){
            res.status(404).json({
                status: "failed",
                message: "Invalid id"
            })
        }
        else{
            res.status(200).json({
                status: "Success",
                message: "Deleted Successfully"
            })
        }

    } catch (e) {
        res.status(404).json({
            status: "failed",
            message: e.message
        })
    }
});

app.get("*", (req,res) => {
    res.status(404).json({
        status: "failed",
        message: "Invalid requests"
    })
})

app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app;   