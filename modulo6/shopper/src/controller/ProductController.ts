import { Request, Response } from "express";
import { ProductBusiness } from "../business/ProductBusiness";
import {
  IPurchaseInputDB,
  ISearchProduct,
  IPostInputDB,
  IPutPurchaseInputDB,
} from "../models/Products";

export class ProductController {
  constructor(private productBusiness: ProductBusiness) {}

  public getAll = async (req: Request, res: Response) => {
    try {
      const input: ISearchProduct = {
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
      const id = req.body.id!;

      const response = await this.productBusiness.getById(id);

      res.status(201).send(response);
    } catch (error: any) {
      res.status(400).send({ message: error.message || error.sqlMessage });
    }
  };

  public postPurchase = async (req: Request, res: Response) => {
    try {
      const input: IPostInputDB = {
        id_cart: req.body.id_cart!,
        id_product: req.body.id_product!,
        price: req.body.price,
      };

      const response = await this.productBusiness.postPurchase(input);

      res.status(201).send(response);
    } catch (error: any) {
      res.status(400).send({ message: error.message || error.sqlMessage });
    }
  };

  public putSumPurchase = async (req: Request, res: Response) => {
    try {
      const input: IPutPurchaseInputDB = {
        id_product: req.body.id_product,
        id_purchase: req.body.id_purchase,
      };

      const response = await this.productBusiness.putSumPurchaseInCart(input);

      res.status(201).send(response);
    } catch (error: any) {
      res.status(400).send({ message: error.message || error.sqlMessage });
    }
  };

  public putSubPurchase = async (req: Request, res: Response) => {
    try {
      const input: IPutPurchaseInputDB = {
        id_product: req.body.id_product,
        id_purchase: req.body.id_purchase,
      };

      const response = await this.productBusiness.putSubPurchaseInCart(input);

      res.status(201).send(response);
    } catch (error: any) {
      res.status(400).send({ message: error.message || error.sqlMessage });
    }
  };

  public getAllPurchase = async (req: Request, res: Response) => {
    try {
      const id_cart = req.body.id_cart!;

      const response = await this.productBusiness.getAllPurchase(id_cart);

      res.status(201).send(response);
    } catch (error: any) {
      res.status(400).send({ message: error.message || error.sqlMessage });
    }
  };

  public delPurchaseItem = async (req: Request, res: Response) => {
    try {
      const id_purchase = req.body.id_purchase!;

      const response = await this.productBusiness.delPurchaseFromCart(
        id_purchase
      );

      res.status(201).send(response);
    } catch (error: any) {
      res.status(400).send({ message: error.message || error.sqlMessage });
    }
  };
}
