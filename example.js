console.log("hello world");
const date=new Date();
// console.log(date);

// const weekDay=function () {
//     const names = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
//     return {
//     name(number) { return names[number]; },
//     number(name) { return names.indexOf(name); }
//     };
// }();

// console.log(weekDay.name(2));
// console.log(weekDay.number("Wednesday"));
// console.log(weekDay.name(weekDay.number("Sunday")));


// let plusOne=function (n) {
//     return n+1
// }

//     number(name) { return names.indexOf(name); }
//     };
// }();

// console.log(weekDay.name(2));
// console.log(weekDay.number("Wednesday"));
// console.log(weekDay.name(weekDay.number("Sunday")));


// let plusOne=function (n) {
//     return n+1
// }

// console.log(plusOne(4));


const http = require("http");
// const server = http.createServer((req, res) => {
//     if (req.url === "/"){
//         res.write("Hello world from Nodeland!");
//         res.end();
//     }
//     if (req.url==="/api/courses"){
//         res.write(JSON.stringify([1,2,3,4,5,6,8,9,5]));
//         res.end();
//     }
// })
// server.listen(3000);

// console.log("Listening on port 3000...");



const postData = JSON.stringify({
  'msg': 'Hello World!',
});

const options={
  hostname: 'localhost',
  port: 3000,
  path: '/',
  method: 'POST',
  auth: 'user:pass',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': Buffer.byteLength(postData),
  },
}
// // The request method needs to run on a running server
// // Without a running server, you'll get a connection error
// const req = http.request(options, (res) => {

//     console.log(res.statusCode);
//     res.on("data", (chunk) => {
//         console.log("Data", chunk);
//     })
//     res.on("end", () => {
//         console.log("No more data");
//     })
//     res.on("error", (err) => {
//         console.error(err.message);    
//     })
// })
// req.write("Hello from Nodeland!");
// req.end();

function playdate(params) {
    console.log(params);
}


function purple() {
    console.log("hello purple");
    for (let i=0; i<=10; i++){
        console.log(i);
    }
}
module.exports = purple; // export a single method
// module.exports.purple= purple; // to export the entire object


setTimeout(() => {
  console.log("Hello world!!!");
})

console.log("This will run first");

