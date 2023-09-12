const { Entity, Column } = require("typeorm");

@Entity()
class Photo{
    @Column()
    id
    @Column()
    name
    @Column()
    email
}

module.exports = { Photo };
