import { Request, Response } from "express";
import { PhotoService } from "../service/photo.service";

export class PhotoController {
  static async getAllPhotos(req: Request, res: Response) {
    try {
      const photos = await PhotoService.getAllPhotos();
      res.json(photos);
    } catch (error: unknown) {
      console.log(error);
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
      console.log(error);
      if (error instanceof Error) {
        res.status(500).json({ error: error.message });
      } else {
        res.status(500).json({ error: "An unknown error occurred" });
      }
    }
  }
}
