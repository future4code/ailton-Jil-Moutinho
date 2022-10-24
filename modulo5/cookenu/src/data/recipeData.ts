import { RecipeModel } from "../model/RecipeModel";
import { BaseDataBase } from "./BaseDataBase";

const tableName = "Recipes";
const tableFollow = "Followers";
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

  public async getRecipeByFollowerId (user_id: string): Promise<any> {
    const result = await this.getConnection()
      .select(
        "recipe_id",
        "title",
        "recipe_description",
        "creation_date",
        "creator_id",
        "user_name"
      )
      .from(tableName)
      .join("UserCookenu", "user_id", "creator_id")
      .join(tableFollow, "followed_id", "user_id")
      .where({ follower_id: `${user_id}` })
      .orderBy("creation_date");
    console.log(result);

    return result;
  }

  public async editRecipeByCreatorId(
    recipe_id: string,
    recipe_description: string,
    creator_id: string
  ): Promise<string> {
    const result = await this.getConnection()
      .update({ recipe_description })
      .from(tableName)
      .where({ recipe_id })
      .andWhere({ creator_id });

    return `Recipe from ${creator_id} updated successfully`;
  }

  public async delRecipe(recipe_id: string): Promise<string> {
    const result = await this.getConnection()
      .delete("*")
      .from(tableName)
      .where({ recipe_id });

    return `Recipe with id ${recipe_id} deleted successfully`;
  }

  public async delRecipeByCreator(creator_id: string): Promise<string> {
    const result = await this.getConnection()
      .delete("*")
      .from(tableName)
      .where({ creator_id });

    return `Recipe with creator id ${creator_id} deleted successfully`;
  }
}
