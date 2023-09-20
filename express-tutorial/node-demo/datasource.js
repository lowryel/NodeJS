const { DataSource } = require("typeorm");
const photo = require("./TypeORM");

const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "eugene",
    password: "lo009",
    database: "films",
    enttiies: [photo],
    logging: false,
})

module.exports=AppDataSource;
