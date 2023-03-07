const http = require("http");

const server = http.createServer((req, res) => {
  console.log("request made");
});

// localhost is the default value for 2nd argument which is like a domain name
// points directly to our own computer
// port no. are like door to our computer
server.listen(3000, "localhost", () => {
  console.log("listening for requests on port 3000");
});

//
//
//
//
// run this file to listen to request been made
