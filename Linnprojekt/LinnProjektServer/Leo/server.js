//Leos Testfil för att koppla till vår domän


const express = require('express');

const app = express();
const port = 80;

//Tim Förståelse: express.static låter dig skriva ut en statisk html fil på sidan
app.use('/22_23', express.static('public'))

//Tim Förståelse: Denna app.get ska skicka information till Headern av webbsidan. Den försöker skicka till URLn "/22_23/preview/"
//Den loggar att den håller på att connecta, skickar en kod som menar success, sedan sätter den Headerns innehåll att läsas som html kod
//Förstår ej res.sendFile
app.get('/22_23/preview/', (req,res) => {
    console.log(`${new Date().toISOString()}: ${req.ip} is connecting to preview website`);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.sendFile(__dirname + '/preview.html');
    
});

//Tim Förståelse: denna app.head appliar för alla URLs. Den skickar error not found och visar även det på webbsidan. 
//Alltså en error metod.
app.head('*', (req,res) => {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.send("404");
});

//Tim Förståelse: denna app.get gör nästan samma som app.head. Loggar dock också att den connectar till 404 vilket jag ej förstår
app.get('*', (req, res) => {
    console.log(`${req.ip} is connecting to 404`);
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.send("404");
});

//Tim Förståelse: Lyssnar på porten 80 och skriver ut det.
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});



//const jsdom = require('jsdom');
//const http = require('node:http');

/*
const hostname = '213.188.154.113';
const port = 80;
const document = new jsdom.JSDOM().window.document;
document.body.appendChild(document.createTextNode('test'));

const server = http.createServer((req, res) => {
    console.log('Connection!');
    console.log(req.url);
    if (req.url.startsWith = '/22_23') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.write(document.head.outerHTML + document.body.outerHTML, 'utf8')
    } else {
        res.statusCode = 404;
    } 

    res.end();
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
*/
