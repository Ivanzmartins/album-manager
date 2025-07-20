import { Entity, PrimaryColumn, Column, ManyToOne } from "typeorm";
import { User } from "./User";
import { Album } from "./Album";

@Entity()
export class Photo {
  @PrimaryColumn()
  id: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  base64: string;

  @Column({ type: "date" })
  uploadedAt: Date;

  @ManyToOne(() => User, (user) => user.photos)
  user: User;

  @ManyToOne(() => Album, (album) => album.photos, {
    onDelete: "CASCADE",
  })
  album: Album;
}
