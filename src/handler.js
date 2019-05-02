const fs = require('fs');
const path = require('path');
const querystring = require("querystring");
const url = require("url");
const words = fs.readFileSync(path.join(__dirname, "..", "word.txt"), "utf-8").split(/\n/);

function handlerHome(request, response ) {
  const endpoint = request.url;
  response.writeHead(200, { 'Content-Type': 'text/html'});
const filePath = path.join(__dirname, "..", "public", "index.html");
fs.readFile(filePath, (error, file) => {
  if (error) {
    console.log(error);
    response.writeHead(404, { 'Content-Type': 'text/plain' });
    response.end("404 - FILE NOT FOUND");
    return;
  }
  response.writeHead(200, {"Content-Type": "text/html" });
  response.end(file);
});
};

const handlerPublic = (request,response) => {
  const url = request.url;
  const extension = url.split(".")[1];
  const filePath = path.join(__dirname, "..", "public", url);
  const type = {
    html: "text/html",
    css: "text/css",
    js: "application/javascript",
  }[extension]

  fs.readFile(filePath, (error, file) => {
    if(error) {
      response.writeHead(404, {"content-type": "text/plain" });
      response.end("404 - file not found");
      return;
    }
    response.writeHead(200, {"content-type": type });
    response.end(file);
  });
}

const handlerSearch = (request, response) => {
  const endpoint = request.url;
  const result = words.filter(el => el[0] === "A");
  console.log(result);
};



module.exports = {
  handlerHome,
  handlerPublic,
  handlerSearch
}
