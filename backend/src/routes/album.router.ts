import express from "express";
import { AlbumController } from "../controller/album.controller";

const albumRouter = express.Router();

albumRouter.get("/", AlbumController.getAllAlbums);
albumRouter.patch("/:id", AlbumController.update);
albumRouter.delete("/:id", AlbumController.delete);

export default albumRouter;
