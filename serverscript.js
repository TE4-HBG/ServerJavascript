const express = require("express");
const app = express();
const port = 80;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    console.log('Connecting to Server')
    res.render('example')
}) 



app.listen(port);

//jag tänker att lättaste sättet att göra detta på är att säga till webbsidan att visa t.ex. index.html.
//Denna index.html ska skickas från inputsidan till servern med alla ändringar som linn vill ha med.
//Sedan ska webbsidan hämta index.html från servern och displaya den.