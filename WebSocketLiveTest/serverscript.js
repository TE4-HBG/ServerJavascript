//Resource för Server Sent events: https://masteringjs.io/tutorials/express/server-sent-events
//Resource för WebSockets: 

const express = require("express");
const app = express();
const webSocket = require ("ws");
const http = require('http');
const httpServer = http.createServer();
//const fs = require('fs');



//Create Websocket Server
const webSocketServer = new webSocket.WebSocketServer({server: httpServer});
webSocketServer.on('connection', function connection(ws) {
  console.log('Client Connected');
  ws.send('Hello');

  ws.on('message', function incoming(message) {
    console.log('received %s', message);
    ws.send('Received message');
    ws.send('Received mhhhessage');
  });
});

//Attempt to use express app methods to load info 
app.get('/LiveWSTest', (req,res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.sendFile('/LiveWSTest.html');
});

//Attempt to listen to two differnet ports and ahve it work (it doesnt)
httpServer.listen(80);
app.listen(8082);

//När Linn skickar upp information från Input-sidan ska det vara olika variabler
//Som innehåller viss info. Denna ska sparas på servern sedan hämtas av display-sidan.
 
//Med hjälp av ett program vid namn Firecamp som är nedladdat på Tims dator
//Lyckades vi skapa en WebSocket connection på servern. Koden ligger nu på 
//servern och Websocket connection öppnades med firecamp terminalen.
//Just nu körs "serverscript.js på servern."

