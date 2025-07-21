import { Entity, PrimaryColumn, Column, ManyToOne, OneToMany } from "typeorm";
import { User } from "./User";
import { Photo } from "./Photo";

@Entity()
export class Album {
  @PrimaryColumn()
  id: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column({ type: "date" })
  createdAt: Date;

  @Column({ type: "date" })
  updatedAt: Date;

  @ManyToOne(() => User, (user) => user.albums)
  user: User;

  @OneToMany(() => Photo, (photo) => photo.album)
  photos: Photo[];
}
