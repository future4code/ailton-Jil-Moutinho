import { Request, Response } from "express";
import selectUserByName from "../data/selectUserByName";

export const getUserByName = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    let searchName = req.query.searchName as string;

    if (!searchName) {
      searchName = "";
    }

    const arrayUsersByName = await selectUserByName(searchName);

    if (!arrayUsersByName.length) {
      res.statusCode = 404;
      throw new Error("No users with this name found.");
    }

    res.status(200).send(arrayUsersByName);
  } catch (error: any) {
    console.log(error);
    res.send(error.message || error.sqlMessage);
  }
};
