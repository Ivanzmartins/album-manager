import { Request, Response } from "express";
import { AlbumService } from "../service/album.service";

export class AlbumController {
  static async getAllAlbums(_req: Request, res: Response) {
    try {
      const albums = await AlbumService.getAllAlbums();
      res.json(albums);
    } catch (error: unknown) {
      if (error instanceof Error) {
        res.status(500).json({ error: error.message });
      } else {
        res.status(500).json({ error: "An unknown error occurred" });
      }
    }
  }
}
