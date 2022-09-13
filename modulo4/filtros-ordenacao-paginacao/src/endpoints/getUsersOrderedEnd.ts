import { Request, Response } from "express";
import selectUsersOrdered from "../data/selectUsersOrdered";

export const getUsersOrdered = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    let searchOrder = req.query.searchOrder as string;

    if (!searchOrder || (searchOrder !== "name" && searchOrder !== "type")) {
      searchOrder = "email";
    }

    if (searchOrder !== "name" && searchOrder !== "type") {
      searchOrder = "email";
    }

    /*     if (
      searchOrder !== "name" &&
      searchOrder !== "type" &&
      searchOrder !== ""
    ) {
      res.statusCode = 404;
      throw new Error("Inform a valid parameter.");
    } */

    const arrayUsersByOrder = await selectUsersOrdered(searchOrder);

    if (!arrayUsersByOrder.length) {
      res.statusCode = 404;
      throw new Error("No users were found.");
    }

    res.status(200).send(arrayUsersByOrder);
  } catch (error: any) {
    console.log(error);
    res.send(error.message || error.sqlMessage);
  }
};
