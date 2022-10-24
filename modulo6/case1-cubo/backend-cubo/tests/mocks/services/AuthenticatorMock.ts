export interface IIdPayload {
  id: string;
}

export class Authenticator {
  generateToken = (id: IIdPayload): string => {
    switch (id) {
      case { id: "103" }:
        return "token-mia";
      default:
        return "token-mock";
    }
  };

  getIdByToken = (token: string): IIdPayload | null => {
    switch (token) {
      case "token-mock":
        return { id: "id-mock" };
      case "token-mia":
        return { id: "103" };
      default:
        return null;
    }
  };
}
