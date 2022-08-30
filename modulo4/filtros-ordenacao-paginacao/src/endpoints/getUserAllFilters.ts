import { Request, Response } from "express";
import selectUsersAllFilters from "../data/selectUsersAllFilters";

export const getUsersAllFilters = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const page = Number(req.query.page);
    let search_name = req.query.search_name as string;
    let searchType = req.query.searchType as string;
    let orderBy = req.query.orderBy as string;

    let offset: number;
    if (!page || page === 0) {
      offset = 0;
    } else {
      offset = 5 * (page - 1);
    }

    if (!search_name) {
      search_name = "";
    }

    if (!searchType) {
      searchType = "";
    }

    if (!orderBy) {
      orderBy = "name";
    }

    const arrayUsersPage = await selectUsersAllFilters(
      search_name,
      searchType,
      orderBy,
      offset
    );

    if (!arrayUsersPage.length) {
      res.statusCode = 404;
      throw new Error("No users found.");
    }

    res.status(200).send(arrayUsersPage);
  } catch (error: any) {
    console.log(error);
    res.send(error.message || error.sqlMessage);
  }
};
