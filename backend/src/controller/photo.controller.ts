import { Request, Response } from "express";
import { PhotoService } from "../service/photo.service";

export class PhotoController {
  static async getAllPhotos(req: Request, res: Response) {
    try {
      const t = 10;
      const photos = await PhotoService.getAllPhotos();
      res.json(photos);
    } catch (error: unknown) {
      if (error instanceof Error) {
        res.status(500).json({ error: error.message });
      } else {
        res.status(500).json({ error: "An unknown error occurred" });
      }
    }
  }

  static async createPhoto(req: Request, res: Response) {
    try {
      const photo = await PhotoService.createPhoto(req.body);
      res.status(201).json(photo);
    } catch (error: unknown) {
      if (error instanceof Error) {
        res.status(500).json({ error: error.message });
      } else {
        res.status(500).json({ error: "An unknown error occurred" });
      }
    }
  }

  static async updatePhoto(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { title, description } = req.body;
      await PhotoService.updatePhoto({ id: Number(id), title, description });
      res.status(200).json({ message: "ok" });
    } catch (error: unknown) {
      if (error instanceof Error) {
        res.status(500).json({ error: error.message });
      } else {
        res.status(500).json({ error: "An unknown error occurred" });
      }
    }
  }

  static async deletePhoto(req: Request, res: Response) {
    try {
      await PhotoService.deletePhoto(Number(req.params.id));
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
