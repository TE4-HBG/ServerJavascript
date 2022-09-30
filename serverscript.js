//Resource för Server Sent events: https://masteringjs.io/tutorials/express/server-sent-events
//Test att försöka bli klar med på Torsdag: Ha en sida som, när du t.ex. trycker en knapp,
//ändrar någonting på en annan sida.

const express = require("express");
const app = express();
const ws = require ("ws");

const port = 80;

app.get('/', (req, res) => {
    console.log('Connecting to Server');
    res.send('Hello World');
});


app.listen(port);

//jag tänker att lättaste sättet att göra detta på är att säga till webbsidan att visa t.ex. index.html.
//Denna index.html ska skickas från inputsidan till servern med alla ändringar som linn vill ha med.
//Sedan ska webbsidan hämta index.html från servern och displaya den.