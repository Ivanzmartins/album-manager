import { Entity, PrimaryColumn, Column, OneToMany } from "typeorm";
import { Album } from "./Album";

@Entity()
export class User {
  @PrimaryColumn()
  id: string;

  @Column()
  username: string;

  @Column()
  email: string;

  @OneToMany(() => Album, (album) => album.user)
  albums: Album[];
}
