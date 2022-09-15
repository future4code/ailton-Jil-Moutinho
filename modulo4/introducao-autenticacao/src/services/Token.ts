import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export class TokenClass {
  generateToken(id: string) {
    const token = jwt.sign({ id }, process.env.JWT_KEY as string, {
      expiresIn: "1hr",
    });

    return token;
  }

  verifyToken(token: string) {
    const verify = jwt.verify(token, process.env.JWT_KEY as string) as any;

    return verify.id;
  }
}

// 1hr ou chama expiresIn: "1hr", e dentro no objeto só expiresIn