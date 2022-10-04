import { Request, Response } from "express";
import { ProductBusiness } from "../business/ProductBusiness";

export class ProductController {
  constructor(private productBusiness: ProductBusiness) {}

  public getAll = async (req: Request, res: Response) => {
    try {
      const input = {
        search: req.body.search!,
        sort: req.body.sort!,
        order: req.body.order!,
        limit: req.body.limit!,
        page: req.body.page!,
        offset: req.body.offset!,
      };

      const response = await this.productBusiness.getAll(input);

      res.status(201).send(response);
    } catch (error: any) {
      res.status(400).send({ message: error.message || error.sqlMessage });
    }
  };

  public getById = async (req: Request, res: Response) => {
    try {
      const id = req.params.id;

      const response = await this.productBusiness.getById(id);

      res.status(201).send(response);
    } catch (error: any) {
      res.status(400).send({ message: error.message || error.sqlMessage });
    }
  };
}
