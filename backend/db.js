const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://simranjeet777555:A5mnFARY99dqBqcL@cluster0.fj4q6vg.mongodb.net/")

const todoSchema = mongoose.Schema({
    title: String,
    description: String, 
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema);
module.exports = {
    todo
}