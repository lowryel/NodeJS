### Nodejs Setup

- // Routing every static file individually
--------------------------
// app.get('/style.css', (req, res)=>{ 
//   console.log(req.method);
//    res.writeHead(200, 'style', {'content-type':'text/css'})
//   res.sendFile(path.resolve(__dirname, "./style.css"))
//    res.end()
// })
