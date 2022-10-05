const WebSocket = require("ws");
const wss = new WebSocket.Server({port : 8082});

wss.on(
     "connection", ws => {
          console.log("New Client Connected");
          ws.on(
               "message", data => {
                    console.log(`Client Has send us the data: ${data}`);
                    ws.send("We have recieved a message");
               })

          ws.on("close", () => {
               console.log("Client has disconnected!");
          })
});