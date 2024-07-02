//1. initializes an empty express app
const express = require("express");
const app = express();

//2. make sure all the endpoints would work and parse the body, it it's a json body.
app.use(express.json());

//3. creates a post endpoint for creating a to-do.
app.post("/todo", function(req, res){

})

//4. creates a get endpoint for getting all the to-do's.
app.get("/todo", function(req, res){

})


//5. creates a put endpoint for marking a specific to-do as completed.
app.put("/completed", function(req, res){

})