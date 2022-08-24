import express, { Express, Request, Response } from "express";
import knex from "knex";
import cors from "cors";
import dotenv from "dotenv";
import { AddressInfo } from "net";

dotenv.config();

export const connection = knex({
  client: "mysql",
  connection: {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_SCHEMA,
  },
});

const app: Express = express();

app.use(express.json());
app.use(cors());

//a) Explique como é a resposta que temos quando usamos o raw. Faça o ex usando raw
//

const getActorById = async (id: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT * FROM Actor WHERE id = '${id}'
  `);
  return result[0][0];
};

// Assim a chamada funciona fora dos endpoints com .then()/.catch
/* getActorById("001")
	.then(result => {
		console.log(result)
	})
	.catch(err => {
		console.log(err)
	}); */

// Assim a chamada funciona fora dos endpoints com await
/* (async () => {
  console.log(await getActorById("001") )
})() */

// Ou então podemos chamá-la dentro de um endpoint
/* app.get("/users/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id

    console.log(await getActorById(id))

    res.end()
  } catch (error: any) {
		console.log(error.message)
    res.status(500).send("Unexpected error")
  }
}) */

// bata no http://localhost:3003/users/001 e veja o que acontece no terminal

//b) Faça uma função que busque um ator pelo nome;
const getActorByName = async (name: string): Promise<any> => {
  const result = await connection.raw(`
SELECT * FROM Actor WHERE name LIKE "%${name}%" 
  `);
  return result[0][0];
};

//Para verificar
app.get("/users/byname/:name", async (req: Request, res: Response) => {
  try {
    const name = req.params.name;

    console.log(await getActorByName(name));

    res.end();
  } catch (error: any) {
    console.log(error.message);
    res.status(500).send("Unexpected error");
  }
});

//c.Faça uma função que receba um `gender` retorne a quantidade de itens na tabela Actor com esse `gender`. Para atrizes, `female` e para atores `male`.*
const getAmountByGender = async (gender: string): Promise<any> => {
  const result = await connection.raw(`
    
  SELECT COUNT(*) as amount FROM Actor WHERE gender = "${gender}" 
    `);
  return result[0][0];
};

/*   SELECT COUNT(*) FROM Actor WHERE gender = "${gender}" 
  Retorna { 'COUNT(*)': 3 } */

/* o em uso retorna { 'COUNT(*)': 3 } */

// verificando - 3b
app.get("/users/bygender/:gender", async (req: Request, res: Response) => {
  try {
    const gender = req.params.gender;

    console.log(await getAmountByGender(gender));

    res.end();
  } catch (error: any) {
    console.log(error.message);
    res.status(500).send("Unexpected error");
  }
});

//Ex2 usando queries builders
const createActor = async (
  id: string,
  name: string,
  salary: number,
  dateOfBirth: Date,
  gender: string
): Promise<void> => {
  await connection
    .insert({
      id: id,
      name: name,
      salary: salary,
      birth_date: dateOfBirth,
      gender: gender,
    })
    .into("Actor");
};

//a) Uma função que receba um salário e um id e realiza a atualização do salário do ator em questão
const updatSalary = async (
  identifier: string,
  salary: number
): Promise<any> => {
  await connection("Actor")
    .update({
      salary: salary,
    })
    .where("id", identifier);

  return await connection("Actor").select("*").where("id", identifier);
};

//4a. Para verificar
app.put("/users/updateSalary", async (req: Request, res: Response) => {
  try {
    const { identifier, salary } = req.body;

    if (!identifier || !salary) {
      res.statusCode = 400;
      throw new Error("identifier and salary fields cannot be empty");
    }

    const newActor = await updatSalary(identifier, salary);

    res.status(200).send(newActor);
  } catch (error: any) {
    console.log(error.message);
    res.status(res.statusCode || 500).send("Unexpected error");
  }
});

//b) Uma função que receba um id e delete um ator da tabela
const deleteActor = async (id: string): Promise<any> => {
  await connection("Actor").delete().where("id", id);

  return await connection("Actor").select("*");
};

//4.b
app.delete("/users/deleteActor/:id", async (req: Request, res: Response) => {
  const id = req.params.id;

  try {
    if (!id) {
      res.statusCode = 400;
      throw new Error("Id fields cannot be empty");
    }

    await deleteActor(id);

    res.status(200).send(await connection("Actor").select("*"));
  } catch (error: any) {
    console.log(error.message);
    res.status(res.statusCode || 500).send("Unexpected error");
  }
});

//c) Uma função que receba um gender e devolva a média dos salários de atrizes ou atores desse gender
const avgSalaryGender = async (gender: string): Promise<string> => {
  const avgValue = await connection("Actor")
    .avg("salary as average_salary")
    .where("gender", gender);

  return `The average salary of the ${gender} actors is R$ ${avgValue[0].average_salary}`;
};

app.get("/users/avgSalary", async (req: Request, res: Response) => {
  try {
    const { gender } = req.body;

    if (!gender) {
      res.statusCode = 400;
      throw new Error("identifier and salary fields cannot be empty");
    }

    const respAvg = await avgSalaryGender(gender);

    res.status(200).send(respAvg);
  } catch (error: any) {
    console.log(error.message);
    res.status(res.statusCode || 500).send("Unexpected error");
  }
});

//Ex3
//a
app.get("/actor/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const actor = await getActorById(id);

    res.status(200).send(actor);
  } catch (err: any) {
    res.status(400).send({
      message: err.message,
    });
  }
});

//b Linha 101

//Ex4
app.post("/actor", async (req: Request, res: Response) => {
  try {
    await createActor(
      req.body.id,
      req.body.name,
      req.body.salary,
      new Date(req.body.dateOfBirth),
      req.body.salary
    );

    res.status(200).send();
  } catch (err: any) {
    res.status(400).send({
      message: err.message,
    });
  }
});

//a. Linha 148

//b. Linha 174

//5.
const createMovie = async (
  id: string,
  movie_name: string,
  synopsis: string,
  release_date: Date,
  review: number,
  playing_limit_date: Date
): Promise<void> => {
  await connection
    .insert({
      id,
      movie_name,
      synopsis,
      release_date,
      review,
      playing_limit_date,
    })
    .into("Movies");
};

app.post("/movies", async (req: Request, res: Response) => {
  const { id, movie_name, synopsis, release_date, review, playing_limit_date } =
    req.body;

  try {
    if (
      !id ||
      !movie_name ||
      !synopsis ||
      !release_date ||
      !review ||
      !playing_limit_date
    ) {
      res.statusCode = 400;
      throw new Error("Inform all the parameters");
    }

    await createMovie(
      id,
      movie_name,
      synopsis,
      release_date,
      review,
      playing_limit_date
    );

    res.status(200).send(await connection("Movies").select("*"));
  } catch (err: any) {
    res.status(400).send({
      message: err.message,
    });
  }
});

//6
const allMovies = async (): Promise<any> => {
  return await connection("Movies").select("*").limit(5);
};

app.get("/movies/all", async (req: Request, res: Response) => {
  try {
    const list = await allMovies();

    res.status(200).send(list);
  } catch (err: any) {
    res.status(400).send({ message: err.message });
  }
});

//7
const movieBySearch = async (search: string): Promise<any> => {
  const searchLower = search.toLowerCase();
  const result = await connection.raw(`
  SELECT * FROM Movies WHERE (movie_name LIKE "%${searchLower}%" OR synopsis LIKE "%${searchLower}%") 
    `);
  return result[0];
};

app.get("/movies", async (req: Request, res: Response) => {
  const search: string = req.query.search as string;

  try {
    const movieToDisplay = await movieBySearch(search);

    res.status(200).send(movieToDisplay);
  } catch (err: any) {
    res.status(500).send({ message: err.message });
  }
});

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost: ${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});
