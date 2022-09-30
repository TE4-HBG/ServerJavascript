//Resource för Server Sent events: https://masteringjs.io/tutorials/express/server-sent-events


const express = require("express");
const app = express();
const webSocket = require ("ws");
const webSocketServer = new webSocket.Server({server});
const port = 80;


ws.on('connection', function connection(ws) {
  ws.on('message', function incoming(message) {
    console.log('received %s', message);
  });

  ws.send('something');
}


app.listen(port);

//jag tänker att lättaste sättet att göra detta på är att säga till webbsidan att visa t.ex. index.html.
//Denna index.html ska skickas från inputsidan till servern med alla ändringar som linn vill ha med.
//Sedan ska webbsidan hämta index.html från servern och displaya den.