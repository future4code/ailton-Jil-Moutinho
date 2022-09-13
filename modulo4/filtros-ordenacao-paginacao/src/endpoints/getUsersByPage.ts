import { Request, Response } from "express";
import selectUsersPage from "../data/selectUsersPage";

export const getUsersPage = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const page = Number(req.params.page);
    console.log(page);

    let offset: number;
    if (!page || page === 0) {
      offset = 0;
    } else {
      offset = 5 * (page - 1);
    }

    const usersPage = await selectUsersPage(offset);

    if (!usersPage.length) {
      res.statusCode = 404;
      throw new Error("No users found.");
    }

    res.status(200).send(usersPage);
  } catch (error: any) {
    console.log(error);
    res.send(error.message || error.sqlMessage);
  }
};
