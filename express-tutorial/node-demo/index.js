import reflectMetadata from "reflect-metadata"
import express from 'express'
const app = express()
import router from './routes/api/members.js';
import path from "path";
import pug from 'pug';
const port = 3000;
import products from "./data.js";
import db from "./queries.js";

import logger from "./middleware/Logger.js";
import "uuid";

// template handling using pug, formally jade middleware
app.set("views", ('./views'));
app.set("view engine", "pug");

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Homepage Route
app.get('/', (req, res) => res.render("main", {products}))

app.use(express.static(path.join("./public/")));

// products API routes
app.use("/api/members", router) // require('./routes/api/members'))

app.get("/users", db.getUsers);
app.get("/users/:id", db.getOneUser);
app.post("/users", db.createUser);


// Init middleware
app.use(logger);

app.all("*", (req, res)=>{ //returns error on any resource which is not found 
  // res.writeHead(404, {'content-type': 'text/htmreq.body.availabilityl'})
  res.sendFile(path.resolve("./404.html"))
  // res.end()
  res.status(400).json({ msg:"Content not available" })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

