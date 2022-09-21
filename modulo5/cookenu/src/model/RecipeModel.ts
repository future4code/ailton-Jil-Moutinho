export class RecipeModel {
  constructor(
    private recipe_id: string,
    private title: string,
    private recipe_description: string,
    private creation_date: string,
    private creator_id: string
  ) {}

  public getId() {
    return this.recipe_id;
  }

  public getTitle() {
    return this.title;
  }

  public getDescription() {
    return this.recipe_description;
  }

  public getcCreationDate() {
    return this.creation_date;
  }

  public getCreatorId() {
    return this.creator_id;
  }
}
