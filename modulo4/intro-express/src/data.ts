//ex2
export type Users = {
  id: number;
  name: string;
  phone: string;
  email: string;
  website: string;
};

export const usersList: Users[] = [
  {
    id: 101,
    name: "Jil Moutinho",
    phone: "+55 (11) 9 9638-6950",
    email: "jil@jil.com",
    website: "www.jil.com.br",
  },
  {
    id: 102,
    name: "Talita Miguel",
    phone: "+55 (11) 9 9638-6951",
    email: "talita@talita.com",
    website: "www.talita.com.br",
  },
  {
    id: 103,
    name: "Mari Andrade",
    phone: "+55 (11) 9 9638-6952",
    email: "mari@mari.com",
    website: "www.mari.com.br",
  },
  {
    id: 104,
    name: "Julio Moutinho",
    phone: "+55 (11) 9 9638-6953",
    email: "julio@julio.com",
    website: "www.julio.com.br",
  },
  {
    id: 105,
    name: "Kleber Miguel",
    phone: "+55 (11) 9 9638-6954",
    email: "kleber@kleber.com",
    website: "www.kleber.com.br",
  },
  {
    id: 106,
    name: "Luiz Andrade",
    phone: "+55 (11) 9 9638-6955",
    email: "luiz@luiz.com",
    website: "www.luiz.com.br",
  },
  {
    id: 107,
    name: "Luiz Andrade Impostor",
    phone: "+55 (11) 9 9638-6955",
    email: "luiz@luiz.com",
    website: "www.luiz.com.br",
  },
];

//ex5
export type Post = {
  id: Number;
  title: string;
  body: string;
  userId: number;
};
//Users["id"]

//ex6 - Fiz fora pq os tipos de usuários já estavam criados. Mas acredito que separado será melhor para evitar conflitos 
export const postsList: Post[] = [
  {
    id: 1,
    title: "Post teste 101",
    body: "Bom dia polvos e polvas!",
    userId: 101,
  },
  {
    id: 2,
    title: "Post teste 102",
    body: "Sou fã de Mario, quem sou eu?",
    userId: 102,
  },
  {
    id: 3,
    title: "Post 103",
    body: "Sou fã de Pokemon, quem sou eu?",
    userId: 103,
  },
  {
    id: 4,
    title: "Post teste 101",
    body: "Bom dia comunidade!",
    userId: 101,
  },
];

/* {
    id: 3,
    title: "Post 103",
    body: "Sou fã de Pokemon, quem sou eu?",
    userId: 103,
  }, */