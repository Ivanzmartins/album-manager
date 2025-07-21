import { AppDataSource } from "../config/database";
import { Album } from "../entity/Album";

export class AlbumService {
  static async getAllAlbums() {
    const albumRepository = AppDataSource.getRepository(Album);
    return await albumRepository.find();
  }

  static async update({
    id,
    title,
    description,
  }: {
    id: string;
    title?: string;
    description?: string;
  }) {
    const albumRepository = AppDataSource.getRepository(Album);
    const album = await albumRepository.findOneBy({ id });

    if (!album) throw new Error("Album not found");

    const updates: Partial<Album> = {};
    if (title !== undefined && title !== "") {
      updates.title = title;
    }

    if (description !== undefined && description !== "") {
      updates.description = description;
    }

    Object.assign(album, updates);
    return await albumRepository.save(album);
  }

  static async delete(id: string) {
    const albumRepository = AppDataSource.getRepository(Album);

    const album = await albumRepository.findOneBy({ id });
    if (!album) {
      throw new Error("album not found");
    }

    return albumRepository.delete({ id });
  }
}
