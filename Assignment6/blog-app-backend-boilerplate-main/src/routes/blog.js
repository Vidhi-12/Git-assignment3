const router = require('express').Router();
const Blog = require('../models/Blog')

// Your routing code goes here


// router.get('/blog',(req,res)=>{
//     res.json({ok:'blog'})
// })

//  Read the data -- READ OPERTAION
router.get("/blog", async (req, res) => {
    const { page = 1, search } = req.query;
    try {
        
        const blog = await Blog.find({$text:{$search: search}}).skip((page -1)*5).limit(5).exec();
        res.status(200).json({
            status: "Success",
            result: blog
        })

    } catch (e) {
        res.status(500).json({
            status: "failed",
            message: e.message
        })
    }
});

// create the data -- CREATE OPERATION
router.post("/blog", async (req, res) => {
    try {
        const blog = await Blog.create(req.body);

        res.status(200).json({
            status: "Success",
            blog
        })

    } catch (e) {
        res.status(500).json({
            status: "failed",
            message: e.message
        })
    }
});

router.put("/blog/:id", async (req, res) => {
    try {
        // Code to update the document
        const blog = await Blog.findOneAndUpdate({_id: req.params.id}, req.body);

        res.status(200).json({
            status: "Success",
            blog
        })

    } catch (e) {
        res.status(500).json({
            status: "failed",
            message: e.message
        })
    }
});

router.delete("/blog/:id", async (req, res) => {
    try {
        // Code to update the document
        const blog = await Blog.deleteOne({_id : req.params.id});

        res.status(200).json({
            status: "Success",
            blog
        })

    } catch (e) {
        res.status(500).json({
            status: "failed",
            message: e.message
        })
    }
});

router.get("*", (req,res) => {
    res.status(404).json({
        status: "failed",
        message: "Invalid requests"
    })
})

module.exports = router;