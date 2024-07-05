//1. initializes an empty express app
const express = require("express");
const { createTodo, updateTodo } = require("./types"); //imported this here from types.js file, because it is exported in types.js file.
const { todo } = require("./db");
const cors = require("cors");
const app = express();


//2. make sure all the endpoints would work and parse the body, it it's a json body.
app.use(express.json());
app.use(cors());


//3. creates a post endpoint for creating a to-do.
app.post("/todo", async function(req, res){
    const createPayload = req.body;
    const parsePalyload =  createTodo.safeParse(createPayload);

    if(!parsePalyload.success) {
        res.status(411).json({
            msg: "You have sent the wrong inputs",
        })
        return;
    }
    //else, put the data in the mongodb
    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    })
    res.json({
        msg: "ToDo Created."
    })
})


//4. creates a get endpoint for getting all the to-do's.
app.get("/todos", async function(req, res){
    const todos = await todo.find();// here () mean, give me everything. 

    res.json({
        todos
    })
})


//5. creates a put endpoint for marking a specific to-do as completed.
app.put("/completed", async function(req, res){
    const updatePayload = req.body;
    const parsePalyload = updateTodo.safeParse(updatePayload);
    if(!parsePayload.success) {
        res.status(411).json({
            msg: "You have sent the wrong inputs",
        })
        return;
    }
    await todo.update({
        _id: req.body.id
    }, {
        completed: true
    })
    res.json({
        msg: "ToDo Marked as Completed."
    })
})

app.listen(3000);