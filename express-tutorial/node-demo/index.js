const express = require('express')
const app = express()

const path = require("path");
const port = 3000
const msql = require("mysql");
// const { readFileSync } = require("fs");
// const readfile = path.("./index.html", "utf8");
// const readcss = readFileSync("./style.css");
// const error404 = readFileSync("./404.html");
// app.use(express.static("./public"));

app.get('/', (req, res) => {
  res.json([{name: 'Eugene', age:12}, {name:'Michael', age:25}])
  // res.send('Hello World, my first node project!')
  // res.writeHead(200, { 'content-type': 'text/html' })
  // res.sendFile(path.resolve(__dirname, "./index.html")) //this is the official method for routing static files
             // but you can also ignore that once you have your static artifacts in the public folder
  // res.end()
})

// app.get('/style.css', (req, res)=>{
//   console.log(req.method);
//    res.writeHead(200, 'style', {'content-type':'text/css'})
//   res.sendFile(path.resolve(__dirname, "./style.css"))
//    res.end()
// })

app.all("*", (req, res)=>{ //returns error on any resource which is not found 
  // res.writeHead(404, {'content-type': 'text/html'})
  res.sendFile(path.resolve(__dirname, "./404.html"))
  // res.end()
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// Code snippet from example.js
