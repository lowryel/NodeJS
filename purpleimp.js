const purple = require("./example");
purple(); // when a module is exported with module.exports

// purple.purple(); // when a is exported with module.exports.purple

const check = require("./check");
check(false);

const path = require("path");
console.log(path.parse(__filename).dir);


// synchronous methods
const fs = require("fs");
console.log(fs.readdirSync("./"));

// asynchronous method
const async = fs.readdir("./", (err, file)=>{
    if (err){
        console.log("Error", err);
    }
    else{
        console.log("Result", file);
    }
})

