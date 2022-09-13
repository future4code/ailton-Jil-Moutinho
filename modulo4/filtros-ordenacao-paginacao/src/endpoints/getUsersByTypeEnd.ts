import { Request, Response } from "express";
import selectUsersByType from "../data/selectUsersByType";

export const getUserByType = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    let searchType = req.params.searchType as string;

    if (!searchType) {
      res.statusCode = 400;
      throw new Error("Inform a type to search.");
    }

    if (searchType !== "cx" && searchType !== "teacher" &&searchType !== "operations") {
      res.statusCode = 400;
      throw new Error("Inform a valid type to search.");
    }

    const arrayUsersByType = await selectUsersByType(searchType);

    if (!arrayUsersByType.length) {
      res.statusCode = 404;
      throw new Error("No users with this type found.");
    }

    res.status(200).send(arrayUsersByType);
  } catch (error: any) {
    console.log(error);
    res.send(error.message || error.sqlMessage);
  }
};