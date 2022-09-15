import * as bcrypt from "bcryptjs";
import dotenv from "dotenv";

export class HashManager {
  public generateHash = async (password: string): Promise<string> => {
    const rounds: number = Number(process.env.BCRYPT_COST);
    const salt: string = await bcrypt.genSalt(rounds);
    const result = await bcrypt.hash(password, salt);
    console.log("encrypted message: ", result);
    return result;
  };

  public compare = async(password: string, hash: string): Promise<boolean> => {
    return bcrypt.compare(password, hash);
  }
}
