import { Request, Response } from "express";
import { UserService } from "../service/user.service";

export class UserController {
  static async getAllUsers(_req: Request, res: Response) {
    try {
      const users = await UserService.getAllUsers();
      res.json(users);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Internal server error" });
    }
  }
}
