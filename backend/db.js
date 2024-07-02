require('dotenv').config();

const mongoose = require("mongoose");
const dbURL = process.env.DATABASE_URL;
mongoose.connect(dbURL);

const todoSchema = mongoose.Schema({
    title: String,
    description: String, 
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema);
module.exports = {
    todo
}