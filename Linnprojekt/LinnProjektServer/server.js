const express = require("express");
const app = express();
const port = 80;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.listen(80);