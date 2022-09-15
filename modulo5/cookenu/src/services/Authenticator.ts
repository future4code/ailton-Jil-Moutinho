import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { typeUser } from "../model/UserModel";

dotenv.config();

interface UserSystem {
  user_id: string;
  role: typeUser;
}

export class TokenClass {
  generateToken(userInfo: UserSystem) {
    const token = jwt.sign({ userInfo }, process.env.JWT_KEY as string, {
      expiresIn: "1hr",
    });

    return token;
  }

  verifyToken(token: string) {
    try {
      const verify = jwt.verify(token, process.env.JWT_KEY as string) as any;

      const returnType = verify.userInfo;

      return returnType;
    } catch (error) {
      return false;
    }
  }
}

// 1hr ou chama expiresIn: "1hr", e dentro no objeto só expiresIn
