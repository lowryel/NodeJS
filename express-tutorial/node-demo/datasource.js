import { DataSource } from "typeorm";
import photo from "./TypeORM";

const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "eugene",
    password: "cartelo009",
    database: "films",
    enttiies: [photo],
    logging: false,
})

export default AppDataSource;
