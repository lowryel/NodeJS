const { createServer } = require("http");
const fs = require("fs")


const server = createServer((req, res) => {
    const filestream = fs.createReadStream("./content/first.txt", "utf8")
    if (req.url==="/"){ //making a request to a server 
        // res.write("Hello from NodeLand!");
        // const text = fs.readFileSync("./content/first.txt", "utf8")
        filestream.on("open", ()=>{
            filestream.pipe(res)
        })
        console.log("response passed...");
        filestream.on("error", (err)=>{
            res.end(err)
        })
        res.end(); // will return you a response
    }

    // You can make requests to as many endpoints as you want
    if (req.url==="/api/courses"){
        res.write(JSON.stringify([1, 2, 3, 4]));
        res.end();
    }

})
server.listen(3000);
console.log("Listening on port 3000...");

// This shows that the http module runs on a running server
// const keepAliveAgent = new http.Agent({ keepAlive: true, maxSockets: 1, timeout: 500 });
// options.agent = keepAliveAgent;
// http.request(options, playdate("hello worlddddd!")); 

