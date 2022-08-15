export type Post2 = {
    id: number;
    title: string;
    body: string;
  };
  export type Users2 = {
    id: number;
    name: string;
    phone: string;
    email: string;
    website: string;
    postsUsers: Post2[];
  };
  export const usersList2: Users2[] = [
    {
      id: 1,
      name: "Jil",
      phone: "(11)95554-4445",
      email: "jil@gmail.com",
      website: "jil.com.br",
      postsUsers: [
        {
          id: 1,
          title: "Bom dia",
          body: "Bom dia polvos e polvas",
        },
        {
          id: 2,
          title: "Bom tarde",
          body: "Bom tarde gente. Hoje tem plantão?",
        },
      ],
    },
    {
        id: 2,
        name: "Talita",
        phone: "(11)95554-4445",
        email: "Talita@gmail.com",
        website: "Talita.com.br",
        postsUsers: []
    },
    {
        id: 3,
        name: "Mari",
        phone: "(11)95554-4445",
        email: "Mari@gmail.com",
        website: "Mari.com.br",
        postsUsers: []
    }
]