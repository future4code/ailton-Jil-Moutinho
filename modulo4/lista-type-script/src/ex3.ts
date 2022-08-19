enum Genre {
  action = "ação",
  drama = "drama",
  comedy = "comédia",
  romance = "romance",
  horror = "terror",
}

type Movie = {
  name: string;
  year: number;
  genre: Genre;
  review?: number;
};

const infoMovies = (
  name: string,
  year: number,
  genre: Genre,
  review?: number
): Movie => {
  return review
    ? {
        name,
        year,
        genre,
        review,
      }
    : {
        name,
        year,
        genre,
      };
};

console.log(infoMovies("Duna", 2021, Genre.action, 74));
console.log(infoMovies("Duna", 2021, Genre.action));

const infoMovies2 = (
  name1: string,
  year1: number,
  genre1: Genre,
  review1?: number
): Movie => {
  return review1
    ? {
        name: name1,
        year: year1,
        genre: genre1,
        review: review1,
      }
    : {
        name: name1,
        year: year1,
        genre: genre1,
      };
};

console.log(infoMovies2("Duna", 2021, Genre.action, 74));
console.log(infoMovies2("Duna", 2021, Genre.action));
