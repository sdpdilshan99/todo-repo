const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const todoModel = require("./Models/todo")

const app = express();
app.use(cors());
app.use(express.json());

const connectionUrl = "mongodb+srv://sdpdilshanrcc:Sadeep%2312345@cluster01.dqowlmt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster01";

mongoose
    .connect(connectionUrl)
    .then( () => console.log("Database connect successfully"))
    .catch( (error) => console.log(error.message));

app.get("/get", (req, res) => {
    todoModel.find()
        .then(result => res.json(result))
        .catch(error => res.json(error))
})

app.put("/update/:id", (req, res) => {
    const {id} = req.params;
    todoModel.findByIdAndUpdate({_id: id}, {done:true})
        .then(result => res.json(result))
        .catch(error => res.json(error))
})

app.put("/edit/:id", (req, res) => {
    const {id} = req.params;
    todoModel.findByIdAndUpdate({_id: id}, )
        .then(result => res.json(result))
        .catch(error => res.json(error))
})

app.delete("/delete/:id", (req, res) => {
    const {id} = req.params;
    todoModel.findByIdAndDelete({_id: id})
        .then(result => res.json(result))
        .catch(error => res.json(error))
})


app.post("/add", (req, res) => {
    const task = req.body.task;
    if (typeof task !== 'string' || task.trim() === '') {
        return res.status(400).json({ error: 'Task must be a non-empty string.' });
    }
    todoModel.create({
        task: task
    }).then(result => res.json(result))
        .catch(error => res.json(error))
})

app.listen(3001, ()=> {
    console.log("Server is Running")
})