import { RecipeModel } from "../model/RecipeModel";
import { BaseDataBase } from "./BaseDataBase";

const tableName = "Recipes";
export class RecipeData extends BaseDataBase {
  public async createRecipe(newRecipe: RecipeModel): Promise<string> {
    await this.getConnection()
      .insert({
        recipe_id: newRecipe.getId(),
        title: newRecipe.getTitle(),
        recipe_description: newRecipe.getDescription(),
        creation_date: newRecipe.getcCreationDate(),
        creator_id: newRecipe.getCreatorId(),
      })
      .into(tableName);

    return `Recipe ${newRecipe.getTitle()} created successfully`;
  }

  public async getRecipeById(
    recipe_id: string
  ): Promise<RecipeModel | undefined> {
    const result = await this.getConnection()
      .select("*")
      .from(tableName)
      .where({ recipe_id });

    if (!result.length) {
      return undefined;
    } else {
      const newRecipe = new RecipeModel(
        result[0].recipe_id,
        result[0].title,
        result[0].recipe_description,
        result[0].creation_date,
        result[0].creator_id
      );
      return newRecipe;
    }
  }
}
