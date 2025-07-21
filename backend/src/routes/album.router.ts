import express from "express";
import { AlbumController } from "../controller/album.controller";

const albumRouter = express.Router();

albumRouter.get("/", AlbumController.getAllAlbums);

export default albumRouter;
