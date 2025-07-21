import { Entity, Column, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Album } from "./Album";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  email: string;

  @OneToMany(() => Album, (album) => album.user)
  albums: Album[];
}
