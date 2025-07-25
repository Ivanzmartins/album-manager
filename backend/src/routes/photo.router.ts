import express from "express";
import { PhotoController } from "../controller/photo.controller";

const photoRouter = express.Router();

photoRouter.get("/", PhotoController.getAllPhotos);
photoRouter.post("/", PhotoController.createPhoto);
photoRouter.patch("/:id", PhotoController.updatePhoto);
photoRouter.delete("/:id", PhotoController.deletePhoto);

export default photoRouter;
