import { BaseError } from "./BaseError";

export class NonExistentClass extends BaseError {
  constructor() {
    super("Non-existent class. Check the id class you provided.", 401);
  }
}