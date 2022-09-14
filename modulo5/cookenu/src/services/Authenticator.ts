import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();



export class TokenClass {
  generateToken(user_id: string) {
    const token = jwt.sign({ user_id }, process.env.JWT_KEY as string, {
      expiresIn: "1hr",
    });

    return token;
  }

  verifyToken(token: string) {
    const verify = jwt.verify(token, process.env.JWT_KEY as string) as any;

    const returnType: string = verify.user_id;

    return returnType;
  }
}
/* export enum typeUser {
  ADMIN = "admin",
  NORMAL = "normal",
}

interface UserSystem {
  id: string;
  role: typeUser;
} */

/* export class TokenClass {
  generateToken(userInfo: UserSystem) {
    const token = jwt.sign({ userInfo }, process.env.JWT_KEY as string, {
      expiresIn: "1hr",
    });

    return token;
  }

  verifyToken(token: string) {
    const verify = jwt.verify(token, process.env.JWT_KEY as string) as any;

    const returnType: UserSystem = verify.userInfo;

    return returnType;
  }
} */

// 1hr ou chama expiresIn: "1hr", e dentro no objeto só expiresIn