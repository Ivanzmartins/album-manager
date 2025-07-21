import { Router } from "express";
import userRouter from "./user.router";
import albumRouter from "./album.router";
import photoRouter from "./photo.router";

const router = Router();

router.use("/users", userRouter);
router.use("/albums", albumRouter);
router.use("/photos", photoRouter);

export default router;
