//Problem statement
//Write an HTTP server that serves the same text file for each request it receives. 
//Your server should listen on the port provided by the first argument to your program. 
//You will be provided with the location of the file to serve as the second command-line argument. 
//You must use the fs.createReadStream() method to stream the file contents to the response.

const http //load required modules
const fs  //load required modules

const server = http.createServer(function (req, res) {
  //your implementation here
})

server.listen //complete this line, the port number is a commnadline argument