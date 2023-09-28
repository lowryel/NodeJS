import Pool from "pg";

// const pgPool = Pool.Pool()

const db = new Pool.Pool({
  host: 'localhost',
  user:'eugene',
  port:'5432',
  password:'cartelo009',
  database:'films'
})

db.connect((err)=>{
  if(err){
    throw err;
  }else{
    console.log("connection established");
  }
})

// GET all users
const getUsers = (request, response) => {
  db.query('SELECT * FROM users', (error, results) => {
    if (error) {
      throw error
    }
    return response.status(200).json(results.rows)
  })
}

// GET single user
const getOneUser = (request, response) => {
    const id = parseInt(request.params.id)
    db.query(`SELECT * FROM users WHERE id=$1`, [id], (err, result) => {
        if (err){
            throw err
        }
        if(id){
            return response.status(200).json(result.rows)
        }else{
            return response.status(400).json({ msg: "invalid id" })
        }
    })
}

const createUser = (request, response) => {
    const { name, email } = request.body;
    db.query(`INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *;`, [name, email], (err, result) => {
        if (err){
            throw err;
        }else{
            return response.status(201).send(`User added with id: ${result.rows[0].id}`)
        }     
    })
}

export default {
    getUsers,
    getOneUser,
    createUser,
}
