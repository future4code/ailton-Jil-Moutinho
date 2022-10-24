import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export interface IIdPayload {
  id: string;
}

export class Authenticator {
  generateToken = (id: IIdPayload): string => {
    const token = jwt.sign(id, process.env.JWT_KEY as string, {
      expiresIn: process.env.JWT_EXPIRES_IN,
    });
    return token;
  };

  getIdByToken = (token: string): IIdPayload | null => {
    try {
      const id = jwt.verify(token, process.env.JWT_KEY as string);
      return id as IIdPayload;
    } catch (error) {
      return null;
    }
  };
};
