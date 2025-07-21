import { AppDataSource } from "../config/database";
import { Album } from "../entity/Album";
import { Photo } from "../entity/Photo";

export class PhotoService {
  static async getAllPhotos() {
    const photoRepository = AppDataSource.getRepository(Photo);
    return await photoRepository.find({
      relations: ["album", "album.user"],
    });
  }

  static async createPhoto(data: {
    title: string;
    description: string;
    base64: string;
    uploadedAt: Date;
    userId: string;
    albumId: string;
  }) {
    const photoRepository = AppDataSource.getRepository(Photo);
    const albumRepository = AppDataSource.getRepository(Album);

    const album = await albumRepository.findOne({
      where: { id: data.albumId },
      relations: ["user"],
    });

    if (!album) throw new Error("Album not found");
    if (album.user.id !== data.userId)
      throw new Error("Album doesn't belong to user");

    const photo = photoRepository.create({
      title: data.title,
      description: data.description,
      base64: data.base64,
      uploadedAt: new Date(data.uploadedAt),
      album: album,
    });

    return await photoRepository.save(photo);
  }

  static async updatePhoto(id: string, updateData: Partial<Photo>) {
    const photoRepository = AppDataSource.getRepository(Photo);
    const photo = await photoRepository.findOneBy({ id });

    if (!photo) throw new Error("Photo not found");

    Object.assign(photo, updateData);
    return await photoRepository.save(photo);
  }
}
