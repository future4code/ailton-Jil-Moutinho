import { BaseError } from "./BaseError";

export class NonExistentStudent extends BaseError {
  constructor() {
    super("Non-existent user. Check the student name, teacher name, student email ou teacher email you provided.", 401);
  }
}
