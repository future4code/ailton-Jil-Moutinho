import { BaseError } from "./BaseError";

export class NonExistentClass extends BaseError {
  constructor() {
    super("Non-existent class. Check the class id you provided.", 401);
  }
}