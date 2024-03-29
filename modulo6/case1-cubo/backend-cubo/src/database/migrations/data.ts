import { IUserDB } from "../../models/User";

export const users: IUserDB[] = [
  {
    id: "101",
    first_name: "Astrodev",
    last_name: "Astronalta",
    nickname: "Astronalta",
    partnership: 1,
    password: "$2a$12$RBAWOHpUvGTE.MEeIohAzec9tlVqtNA/x2PMPt/Hrt0vI437cQdJC", // bananinha
  },
  {
    id: "102",
    first_name: "Raul",
    last_name: "Gatuno",
    nickname: "Raul",
    partnership: 5,
    password: "$2a$12$PULtVNlAll87D6E8pR/0HO9vbzVDPaUMA89rc5cNmYoAAepbwmkcO", // qwerty00
  },
  {
    id: "103",
    first_name: "Mia",
    last_name: "Gatona",
    nickname: "Mia",
    partnership: 10,
    password: "$2a$12$LkWMqS3oPhP2iVMcZOVvWer9ahUPulxjB0EA4TWPxWaRuEEfYGu/i", // asdfg123
  },
];
