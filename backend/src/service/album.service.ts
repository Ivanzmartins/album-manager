import { AppDataSource } from "../config/database";
import { Album } from "../entity/Album";
import { Photo } from "../entity/Photo";
import { User } from "../entity/User";

export class AlbumService {
  static async getAllAlbums() {
    const albumRepository = AppDataSource.getRepository(Album);
    return await albumRepository.find();
  }

  static async createAlbumWithPhoto(data: {
    title: string;
    description: string;
    createdAt: Date;
    userId: string;
    photo: {
      title: string;
      description: string;
      base64: string;
      uploadedAt: Date;
    };
  }) {
    return AppDataSource.transaction(async (transactionalEntityManager) => {
      const userRepository = transactionalEntityManager.getRepository(User);
      const albumRepository = transactionalEntityManager.getRepository(Album);
      const photoRepository = transactionalEntityManager.getRepository(Photo);

      // Validate user exists
      const user = await userRepository.findOneBy({ id: data.userId });
      if (!user) throw new Error("User not found");

      // Create album
      const album = albumRepository.create({
        title: data.title,
        description: data.description,
        createdAt: new Date(data.createdAt),
        user: user,
      });
      await albumRepository.save(album);

      // Create associated photo
      const photo = photoRepository.create({
        ...data.photo,
        uploadedAt: new Date(data.photo.uploadedAt),
        user: user,
        album: album,
      });
      await photoRepository.save(photo);

      return { ...album, photos: [photo] };
    });
  }

  static async updateAlbum(id: string, updateData: Partial<Album>) {
    const albumRepository = AppDataSource.getRepository(Album);
    const album = await albumRepository.findOneBy({ id });

    if (!album) throw new Error("Album not found");

    Object.assign(album, updateData);
    return await albumRepository.save(album);
  }
}
