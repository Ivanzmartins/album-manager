import {
  Entity,
  Column,
  ManyToOne,
  OneToMany,
  JoinColumn,
  PrimaryGeneratedColumn,
} from "typeorm";
import { User } from "./User";
import { Photo } from "./Photo";

@Entity()
export class Album {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title?: string;

  @Column()
  description?: string;

  @Column({ name: "userId" })
  userId: number;

  @Column({ type: "date" })
  createdAt: Date;

  @Column({ type: "date" })
  updatedAt: Date;

  @ManyToOne(() => User, (user) => user.albums)
  @JoinColumn({ name: "userId" })
  user: User;

  @OneToMany(() => Photo, (photo) => photo.album)
  photos: Photo[];
}
