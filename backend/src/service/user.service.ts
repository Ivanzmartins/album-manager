import { AppDataSource } from "../config/database";
import { User } from "../entity/User";

export class UserService {
  static async getAllUsers() {
    const userRepository = AppDataSource.getRepository(User);
    return await userRepository.find();
  }
}
