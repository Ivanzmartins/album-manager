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

  static async delete(req: Request, res: Response) {
    try {
      await AlbumService.delete(req.params.id);
      res.status(200).json({ message: "ok" });
    } catch (error: unknown) {
      console.log(error);
      if (error instanceof Error) {
        res.status(500).json({ error: error.message });
      } else {
        res.status(500).json({ error: "An unknown error occurred" });
      }
    }
  }
  static async update(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { title, description } = req.body;
      await AlbumService.update({ id, title, description });
      res.status(200).json({ message: "ok" });
    } catch (error: unknown) {
      if (error instanceof Error) {
        res.status(500).json({ error: error.message });
      } else {
        res.status(500).json({ error: "An unknown error occurred" });
      }
    }
  }
}
