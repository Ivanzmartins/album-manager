import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from "typeorm";
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

  @Column({ name: "albumId" })
  albumId: string;

  @ManyToOne(() => Album, (album) => album.photos)
  @JoinColumn({ name: "albumId" })
  album: Album;
}
