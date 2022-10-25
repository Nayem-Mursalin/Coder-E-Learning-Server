const { application } = require('express');
const express = require('express')
const app = express();
const port = process.env.PORT || 5500;


app.get('/', (req, res) => {
    res.send('Coder-e-Learnig Server Running')
})

app.listen(port, () => {
    console.log("Our E-Learning Server is Running on port: ", port);
})