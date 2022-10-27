const express = require('express')
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5500;

app.use(cors());

const categoryies = require('./data/category.json');

app.get('/', (req, res) => {
    res.send('Coder-e-Learnig Server Running')
})

app.get('/allcourses', (req, res) => {
    res.send(categoryies);
})

app.get('/course/:id', (req, res) => {
    const ids = req.params.id;
    const courses = categoryies.filter(n => n.id == ids);
    res.send(courses);
})

app.listen(port, () => {
    console.log("Our E-Learning Server is Running on port: ", port);
})