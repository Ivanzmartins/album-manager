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

  static async createAlbum(req: Request, res: Response) {
    try {
      const album = await AlbumService.createAlbumWithPhoto(req.body);
      res.status(201).json(album);
    } catch (error: unknown) {
      if (error instanceof Error) {
        res.status(400).json({ error: error.message });
      } else {
        res.status(400).json({ error: "Invalid request data" });
      }
    }
  }

  static async updateAlbum(req: Request, res: Response) {
    try {
      const album = await AlbumService.updateAlbum(req.params.id, req.body);
      res.json(album);
    } catch (error: unknown) {
      if (error instanceof Error) {
        res.status(404).json({ error: error.message });
      } else {
        res.status(404).json({ error: "Album not found" });
      }
    }
  }
}
