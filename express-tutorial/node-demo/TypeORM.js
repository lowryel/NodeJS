import { Entity, Column } from "typeorm";

@Entity()
class Photo{
    @Column()
    id
    @Column()
    name
    @Column()
    email
}

export default Photo;
