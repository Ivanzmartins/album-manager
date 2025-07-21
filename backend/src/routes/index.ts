import { Router } from "express";
import userRouter from "./user.router";
import albumRouter from "./album.router";

const router = Router();

router.use("/users", userRouter);
router.use("/albums", albumRouter);

export default router;
