import express from "express";
import { AlbumController } from "../controller/album.controller";

const albumRouter = express.Router();

albumRouter.get("/", AlbumController.getAllAlbums);
albumRouter.post("/", AlbumController.createAlbum);
albumRouter.patch("/:id", AlbumController.updateAlbum);

export default albumRouter;
