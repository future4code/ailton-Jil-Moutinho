import { BaseDatabase } from "../../src/database/BaseDatabase";
import {
  IPostInputIdDB,
  IProductDB,
  IPurchaseInputDB,
  ISearchProduct,
} from "../../src/models/Products";

export class ProductDatabaseMock extends BaseDatabase {
  public static TABLE_PRODUCTS = "Shopper_Products";
  public static TABLE_PURCHASES = "Shopper_Purchases";

  public getAllProducts = async (input: ISearchProduct) => {
    const products: IProductDB[] = [
      {
        id: "16",
        name: "AZEITE  PORTUGUÊS EXTRA VIRGEM GALLO 500ML",
        price: 20.49,
        qty_stock: 158,
      },
      {
        id: "18",
        name: "BEBIDA ENERGÉTICA VIBE 2L",
        price: 8.99,
        qty_stock: 659,
      },
      {
        id: "19",
        name: "ENERGÉTICO RED BULL ENERGY DRINK 250ML",
        price: 7.29,
        qty_stock: 909,
      },
    ];
    return products;
  };

  public getProductById = async (
    id: string
  ): Promise<IProductDB | undefined> => {
    switch (id) {
      case "16":
        const product16: IProductDB = {
          id: "16",
          name: "AZEITE  PORTUGUÊS EXTRA VIRGEM GALLO 500ML",
          price: 20.49,
          qty_stock: 158,
        };

        return product16;

      case "18":
        const product18: IProductDB = {
          id: "18",
          name: "BEBIDA ENERGÉTICA VIBE 2L",
          price: 8.99,
          qty_stock: 659,
        };

        return product18;
    }
  };

  public postPurchase = async (input: IPostInputIdDB): Promise<string> => {
    return `Purchase created successfully`;
  };

  public putStockByIdSum = async (id_product: string): Promise<string> => {
    return `Quantity removed from stock successfuly`;
  };

  public putStockByIdSub = async (
    id_product: string
  ): Promise<string> => {
    return `Quantity added in stock successfuly`;
  };

  public getPurchase = async (
    id_product: string,
    id_cart: string
  ): Promise<IPurchaseInputDB> => {
    return {
      id_purchase: "e835c2a0-8f67-4594-9b0e-edd6f8d0cb78",
      id_cart: "be679a85-58e9-4dd0-8e8b-1f2519276db1",
      id_product: "79",
      quantity: 2,
      price: 7.99,
    };
  };

  public getPurchaseById = async (id_purchase: string): Promise<any> => {
    switch (id_purchase) {
      case "e835c2a0-8f67-4594-9b0e-edd6f8d0cb78":
        return { quantity: 2 };

      case "f87c36bf-6a78-4555-97dc-9c952c95b3c8":
        return { quantity: 1 };
    }
  };

  public putPurchaseById = async (id_purchase: string): Promise<string> => {
    return `Quantity added in cart successfuly`;
  };

  public putDelPurchaseById = async (id_purchase: string): Promise<string> => {
    return `Quantity removed from cart successfuly`;
  };

  public getAllPurchaseById = async (
    id_cart: string
  ): Promise<IPurchaseInputDB[] | undefined> => {
    switch (id_cart) {
      case "be679a85-58e9-4dd0-8e8b-1f2519276db1":
        return [
          {
            id_purchase: "e835c2a0-8f67-4594-9b0e-edd6f8d0cb78",
            id_cart: "be679a85-58e9-4dd0-8e8b-1f2519276db1",
            id_product: "79",
            quantity: 2,
            price: 7.99,
          },
          {
            id_purchase: "f87c36bf-6a78-4555-97dc-9c952c95b3c8",
            id_cart: "be679a85-58e9-4dd0-8e8b-1f2519276db1",
            id_product: "92",
            quantity: 1,
            price: 3.09,
          },
        ];
      case "teste":
        return [];
    }
  };
}
