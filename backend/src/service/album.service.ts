import { AppDataSource } from "../config/database";
import { Album } from "../entity/Album";

export class AlbumService {
  static async getAllAlbums() {
    const albumRepository = AppDataSource.getRepository(Album);
    return await albumRepository.find();
  }
}
