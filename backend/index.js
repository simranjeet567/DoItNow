//1. initializes an empty express app
const express = require("express");
const { createTodo, updateTodo } = require("./types"); //imported this here from types.js file, because it is exported in types.js file.
const app = express();


//2. make sure all the endpoints would work and parse the body, it it's a json body.
app.use(express.json());


//3. creates a post endpoint for creating a to-do.
app.post("/todo", function(req, res){
    const createPayload = req.body;
    const parsePalyload =  createTodo.safeParse(createPayload);

    if(!parsePalyload.success) {
        res.status(411).json({
            msg: "You have sent the wrong inputs",
        })
        return;
    }
    //else, put the data in the mongodb

})


//4. creates a get endpoint for getting all the to-do's.
app.get("/todo", function(req, res){

})


//5. creates a put endpoint for marking a specific to-do as completed.
app.put("/completed", function(req, res){
    const updatePayload = req.body;
    const parsePalyload = updateTodo.safeParse(updatePayload);
    if(!parsePalyload.success) {
        res.status(411).json({
            msg: "You have sent the wrong inputs",
        })
        return;
    }
})