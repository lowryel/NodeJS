const express = require('express')
const app = express()
const router = require('./routes/api/members');
const path = require("path");
const pug = require('pug');
const port = 3000;
const products = require("./data");

const logger = require("./middleware/Logger");
const uuid = require("uuid");

// template handling using pug, formally jade middleware
app.set("views", ('./views'));
app.set("view engine", "pug");

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Homepage Route
app.get('/', (req, res) => res.render("main", {products}))

app.use(express.static(path.join(__dirname, "./public")));

// products API routes
app.use("/api/members", router) // require('./routes/api/members'))

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

