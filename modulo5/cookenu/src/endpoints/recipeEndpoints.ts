import { Request, Response } from "express";
import { RecipeData } from "../data/recipeData";
import { MissingFields } from "../error/MissinFields";
import { PermissionDenied } from "../error/PermissionDenied";
import { RecipeModel } from "../model/RecipeModel";
import { TokenClass } from "../services/Authenticator";
import GenerateId from "../services/GeneratorId";
import moment from "moment";

export class recipeEndpoint {
  async create(req: Request, res: Response) {
    try {
      const { title, recipe_description } = req.body;

      if (!title || !recipe_description) {
        throw new MissingFields();
      }

      const token = req.headers.authorization!;
      const isOk = new TokenClass().verifyToken(token);
      if (isOk === false) {
        throw new PermissionDenied();
      }

      const recipeDataBase = new RecipeData();

      const recipe_id = new GenerateId().createId();

      const tst = new Date();

      const creation_date = moment(tst).format("YYYY-MM-DD");

      const newRecipe = new RecipeModel(
        recipe_id,
        title,
        recipe_description,
        creation_date,
        isOk.user_id
      );

      const result = await recipeDataBase.createRecipe(newRecipe);

      res.status(201).send({ message: result });
    } catch (error: any) {
      res.status(error.statusCode || 500).send({ message: error.message });
    }
  }

  async getById(req: Request, res: Response) {
    try {
      // const token = req.headers.authorization as string
      const recipe_id = req.params.recipe_id;
      const token = req.headers.authorization!;

      if (!recipe_id) {
        throw new MissingFields();
      }

      const isOk = new TokenClass().verifyToken(token);
      if (isOk === false) {
        throw new PermissionDenied();
      }

      const newRecipeData = new RecipeData();

      const recipeById = await newRecipeData.getRecipeById(recipe_id);

      res.status(200).send({
        message: {
          recipes_id: recipeById?.getId(),
          title: recipeById?.getTitle(),
          recipes_description: recipeById?.getDescription(),
          creation_date: recipeById?.getcCreationDate(),
        },
      });
    } catch (error: any) {
      res
        .status(error.statusCode || 500)
        .send({ message: error.message || error.sqlMessage });
    }
  }

  async putEditeRecipe(req: Request, res: Response) {
    try {
      // const token = req.headers.authorization as string
      const { recipe_id, recipe_description } = req.body;
      const token = req.headers.authorization!;

      if (!recipe_description || !recipe_id) {
        throw new MissingFields();
      }

      const isOk = new TokenClass().verifyToken(token);

      if (isOk === false) {
        throw new PermissionDenied();
      }

      const newRecipeData = new RecipeData();

      const recipeById = await newRecipeData.getRecipeById(recipe_id);

      let result: string = "";
      if (recipeById?.getCreatorId() === isOk.user_id) {
        result = await newRecipeData.editRecipeByCreatorId(
          recipe_id,
          recipe_description,
          isOk.user_id
        );
      } else {
        throw new PermissionDenied();
      }

      res.status(200).send({
        message: result,
      });
    } catch (error: any) {
      res
        .status(error.statusCode || 500)
        .send({ message: error.message || error.sqlMessage });
    }
  }

  async delRecipeAtentionRole(req: Request, res: Response) {
    try {
      // const token = req.headers.authorization as string
      const { recipe_id } = req.body;
      const token = req.headers.authorization!;

      if (!recipe_id) {
        throw new MissingFields();
      }

      const isOk = new TokenClass().verifyToken(token);

      if (isOk === false) {
        throw new PermissionDenied();
      }

      const newRecipeData = new RecipeData();

      const recipeById = await newRecipeData.getRecipeById(recipe_id);

      let result: string = "";
      if (recipeById?.getCreatorId() === isOk.user_id || isOk.role == "admin") {
        result = await newRecipeData.delRecipe(recipe_id);
      } else {
        throw new PermissionDenied();
      }

      res.status(200).send({
        message: result,
      });
    } catch (error: any) {
      res
        .status(error.statusCode || 500)
        .send({ message: error.message || error.sqlMessage });
    }
  }
}
