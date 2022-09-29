import { tickets } from "../database/migrations/data";
import { ShowDatabase } from "../database/ShowDatabase";
import { AuthenticationError } from "../errors/AuthenticationError";
import { AuthorizationError } from "../errors/AuthorizationError";
import { ConflictError } from "../errors/ConflictError";
import { ParamsError } from "../errors/ParamsError";
import { IShowInputDB, Show } from "../models/Show";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";

export class ShowBusiness {
  constructor(
    private showDatabase: ShowDatabase,
    private idGenerator: IdGenerator,
    private authenticator: Authenticator
  ) {}

  public postShow = async (input: IShowInputDB) => {
    const { band, starts_at, token } = input;

    if (!band || !starts_at) {
      throw new ParamsError("You must inform show data");
    }

    if (typeof band !== "string" || band.length < 1) {
      throw new ParamsError("Your post must have at least one charactere");
    }

    /*     if (typeof new Date(starts_at!) !== "Date") {
      throw new ParamsError("starts_at is not valid");
    } */

    const payload = this.authenticator.getTokenPayload(token);

    if (!payload) {
      throw new AuthenticationError();
    }

    if (payload.role === "NORMAL") {
      throw new AuthorizationError();
    }

    if (starts_at < new Date("2022/12/05")) {
      throw new ParamsError("Festival hasn't started yet.");
    }

    const existShow = await this.showDatabase.getShowByDate(starts_at);

    if (existShow) {
      throw new ConflictError();
    }

    const id = this.idGenerator.generate();

    const newShow = new Show(id, band, starts_at);

    const showDB = await this.showDatabase.createShow(newShow);

    return { message: "Show created successfully" };
  };

  public getAllShows = async (token: string) => {
    const payload = this.authenticator.getTokenPayload(token);

    if (!payload) {
      throw new AuthenticationError();
    }

    const allShows: Show[] = await this.showDatabase.getAllShow();

    /* const Shows = allShows.map((eachPost) => {
      return new Show(eachPost.id, eachPost.content, eachPost.user_id);
    }); */

    /*     for (let post of Shows) {
      const allLikes = await this.showDatabase.getLikesByPost(post.getId());
      const likes = Number(allLikes.length);
      post.setLikes(likes);
    } */

    return allShows;
  };
}
