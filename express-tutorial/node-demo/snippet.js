const express = require('express')
const app = express()
// const router = require('./routes/api/members');
const path = require("path");
const port = 3000
// const msql = require("mysql");

const logger = require("./middleware/Logger")
const uuid = require("uuid");

// const { readFileSync } = require("fs");
// const readfile = path.("./index.html", "utf8");
// const readcss = readFileSync("./style.css");
// const error404 = readFileSync("./404.html");


// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "./public")));

// products API routes
app.use("/api/members", require('./routes/api/members'))
// Init middleware

app.use(logger);




app.all("*", (req, res)=>{ //returns error on any resource which is not found 
  // res.writeHead(404, {'content-type': 'text/htmreq.body.availabilityl'})
  res.sendFile(path.resolve(__dirname, "./404.html"))
  // res.end()
  res.status(400).json({ msg:"Content not available" })
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// Code snippet from example.js