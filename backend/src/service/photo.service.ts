import { AppDataSource } from "../config/database";
import { Album } from "../entity/Album";
import { Photo } from "../entity/Photo";

export class PhotoService {
  static async getAllPhotos() {
    const photoRepository = AppDataSource.getRepository(Photo);
    return await photoRepository.find({ relations: ["album"] });
  }

  static async getAlbumById(id: number): Promise<Album> {
    const albumRepository = AppDataSource.getRepository(Album);
    const album = await albumRepository.findOneBy({ id });

    if (!album) throw new Error("Album not found");

    return album;
  }

  static async createAlbum(userId: number, title: string): Promise<Album> {
    const albumRepository = AppDataSource.getRepository(Album);
    const now = new Date();

    const album = albumRepository.create({
      title,
      description: "",
      userId: userId,
      createdAt: now,
      updatedAt: now,
    });

    return await albumRepository.save(album);
  }

  static async createPhotoInAlbum(data: {
    title?: string;
    description?: string;
    base64: string;
    album: Album;
  }) {
    const photoRepository = AppDataSource.getRepository(Photo);
    const photo = photoRepository.create({
      title: data.title,
      description: data.description,
      base64: data.base64,
      uploadedAt: new Date(),
      albumId: String(data.album.id),
    });

    return await photoRepository.save(photo);
  }

  static async createPhoto(data: {
    title?: string;
    description?: string;
    base64: string;
    userId: number;
    albumId?: number;
    newAlbumTitle?: string;
  }) {
    let album: Album;

    if (data.albumId) {
      album = await this.getAlbumById(data.albumId);
    } else if (data.newAlbumTitle) {
      album = await this.createAlbum(data.userId, data.newAlbumTitle);
    } else {
      throw new Error("Either albumId or newAlbumTitle must be provided");
    }

    return await this.createPhotoInAlbum({
      title: data.title,
      description: data.description,
      base64: data.base64,
      album,
    });
  }

  static async updatePhoto({
    id,
    title,
    description,
  }: {
    id: number;
    title: string;
    description: string;
  }) {
    const photoRepository = AppDataSource.getRepository(Photo);
    const photo = await photoRepository.findOneBy({ id });

    if (!photo) throw new Error("Photo not found");

    const updates: Partial<Photo> = {};
    if (title) updates.title = title;
    if (description) updates.description = description;

    Object.assign(photo, updates);
    return await photoRepository.save(photo);
  }

  static async deletePhoto(id: number) {
    const photoRepository = AppDataSource.getRepository(Photo);
    const photo = await photoRepository.findOneBy({ id });
    if (!photo) throw new Error("Photo not found");
    return photoRepository.delete({ id });
  }
}
