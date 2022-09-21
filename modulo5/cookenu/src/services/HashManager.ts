import * as bcrypt from "bcryptjs";
import dotenv from "dotenv";

export class HashManager {
  public generateHash = async (user_password: string): Promise<string> => {
    const rounds: number = Number(process.env.BCRYPT_COST);
    const salt: string = await bcrypt.genSalt(rounds);
    const result = await bcrypt.hash(user_password, salt);

    return result;
  };

  public compare = async(user_password: string, hash: string): Promise<boolean> => {
    return bcrypt.compare(user_password, hash);
  }
}