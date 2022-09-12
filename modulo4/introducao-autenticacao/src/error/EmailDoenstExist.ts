import { BaseError } from "./BaseError";

export class NonExistentEmail extends BaseError {
  constructor() {
    super("There is no user with this email.", 400);
  }
}