### Nodejs Setup

- // Routing every static file individually
--------------------------
// app.get('/style.css', (req, res)=>{ 
//   console.log(req.method);
//    res.writeHead(200, 'style', {'content-type':'text/css'})
//   res.sendFile(path.resolve(__dirname, "./style.css"))
//    res.end()
// })

##### Assigning privileges to database in postgres
- run `CREATE DATABASE <dbname>;`
- `CREATE USER <username> WITH ENCRYPTED PASSWORD '<password>';`
- `GRANT ALL PRIVILEGES ON DATABASE <dbname> TO <username>;`
* If you experience a permission denied error, 
  - #### FIX: 
    - `GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO <username>`;

- Parser is responsible for parsing form data from the frontend and is configured by
* `app.use(express.urlencoded({ extended:false }))` then parse it in as `app.use(express.json())`