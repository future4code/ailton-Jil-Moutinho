
CREATE TABLE Rating (
id VARCHAR(255) PRIMARY KEY,
comment TEXT NOT NULL,
rate FLOAT NOT NULL,
movie_id VARCHAR(255),
FOREIGN KEY (movie_id) REFERENCES Movies(id)
);

-- a) Uma chave estrangeira é a chave que liga esta tabela a tabela que queremos relacionar;

-- b) Crie a tabela e, ao menos, uma avaliação para cada um dos filmes

SELECT * FROM Movies;

INSERT INTO Rating
VALUES (
"a",
"Filme trata de um assunto profundo sendo mostrado de um jeito leve, até engraçadinho.",
9,
"002"
);

INSERT INTO Rating
VALUES (
"b",
"Duas palavras para descrever esse filme: “envolvente e sensual”",
7,
"003"
);

INSERT INTO Rating
VALUES (
"c",
"-Se correr o bicho pega, se ficar o bicho come.- A frase dita em off pelo protagonista sintetiza uma realidade que é mostrada no filme, muito comum para quem vive na periferia de grandes metrópoles do Brasil, neste caso, o Rio de Janeiro.",
10,
"004"
);

INSERT INTO Rating
VALUES (
"d",
"Chris Columbus é uma escolha acertada para adaptar uma obra infantil e mágica. Harry Potter ganha vida nas telas e tudo aqui é feito com respeito enorme ao material original",
9.5,
"005"
);

INSERT INTO Rating
VALUES (
"e",
"Uma verdadeira homenagem a incrível obra escrita por Tolkien. Personagens magníficos, em um mundo fantástico tão bem construído, que em certos momentos, sinto como se tudo aqui apresentado realmente aconteceu e é tudo verdade.",
9,
"006"
);

INSERT INTO Rating
VALUES (
"f",
"Mostra o funcionamento e a importância de cada área da mente e dos sentimentos nas nossas vidas. É um filme que atrairá as crianças por causa das personalidades fortes e únicas dos sentimentos e suas cores, mas que será uma aula para os adultos.",
9,
"008"
);

INSERT INTO Rating
VALUES (
"g",
"Mostra o funcionamento e a importância de cada área da mente e dos sentimentos nas nossas vidas. É um filme que atrairá as crianças por causa das personalidades fortes e únicas dos sentimentos e suas cores, mas que será uma aula para os adultos.",
9,
"007"
);

INSERT INTO Rating
VALUES (
"H",
"MÁGICO!",
9.9,
"006"
);
-- c) Tente criar uma avaliação para um filme que não existe (ou seja, um id inválido). Anote e explique o resultado da query.
-- Código de erro: 1452. Não é possível adicionar ou atualizar uma linha filho: uma restrição de chave estrangeira falha (`ailton-jil-moutinho`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movies` (`id` ))
-- Como não tem id correspondente não consegue criar

-- d) Altere a tabela de filmes para que ela não tenha mais uma coluna chamada rating.
ALTER TABLE Movies DROP COLUMN review;

DESCRIBE Movies;

-- e) Tente apagar um filme que possua avaliações. Anote e explique o resultado da query.
-- Não deixa pois tem info associada a ela em outra tabela, teria que apagar a segunda tabela antes de apagar esse item.

CREATE TABLE MovieCast (
movie_id VARCHAR(255),
actor_id VARCHAR(255),
FOREIGN KEY (movie_id) REFERENCES Movies(id),
FOREIGN KEY (actor_id) REFERENCES Actor(id)
);

-- a) Explique, com as suas palavras, essa tabela
-- Cria uma tabela grande que relaciona os filmes e os atores conforme ids

-- b) Crie, ao menos, 6 relações nessa tabela 
INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
"001",
"001"
);

INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
"001",
"002"
);

INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
"002",
"003"
);

INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
"007",
"003"
);

INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
"003",
"006"
);

INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
"004",
"007"
);

-- c) Tente criar uma relação com um filme ou um ator inexistente. Anote e explique o resultado da query
INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
"004",
"008"
);
-- Código de erro: 1452. Não é possível adicionar ou atualizar uma linha filho: uma restrição de chave estrangeira falha (`ailton-jil-moutinho`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `Actor` (`id` ))

-- d) Tente apagar um ator que possua uma relação nessa tabela. Anote e explique o resultado da query
DELETE FROM Actor WHERE id = "004";
DELETE FROM Actor WHERE id = "006";
-- Código de erro: 1451. Não é possível excluir ou atualizar uma linha pai: uma restrição de chave estrangeira falha (`ailton-jil-moutinho`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `Actor` (`id` ))
-- Só deixará se apagar a relação entre tabelas antes

-- 3 
SELECT * FROM Movies 
INNER JOIN Rating ON Movies.id = Rating.movie_id;
-- a) Explique, com suas palavras, a query acima. O que é o operador ON?
-- junta as duas planilhas unificando a linha onde (ON) o id do filme e do filme no Rating são iguais.

-- b) Escreva uma query que retorne somente o nome, id e nota de avaliação dos filmes que já foram avaliados.
SELECT movie_name, Movies.id, rate FROM Movies
INNER JOIN Rating ON Movies.id = Rating.movie_id;

-- 4 a) Escreva uma query que retorne todos os filmes e suas avaliações (com essa avaliação existindo ou não). A sua query deve retornar somente o nome, id, nota do filme e comentário
SELECT movie_name, Movies.id, rate, comment
FROM Movies
LEFT JOIN Rating 
ON Movies.id = Rating.movie_id;

-- b) Escreva uma query que retorne todas as relações de elenco, junto com as informações do filme. A sua query deve retornar o id do filme, título do filme e id do ator
SELECT movie_name, Movies.id, actor_id
FROM Movies
LEFT JOIN MovieCast 
ON Movies.id = MovieCast.movie_id;

-- c) Escreva uma query que retorne a média das avaliações de todos os filmes agrupada em relação aos filmes (mesmo que ele não tenha sido avaliado ainda)
SELECT AVG(r.rate), m.id, m.movie_name FROM Movies m
LEFT JOIN Rating r ON m.id = r.movie_id
GROUP BY (m.id);

-- Ex5
SELECT * FROM Movies m
LEFT JOIN MovieCast mc ON m.id = mc.movie_id
JOIN Actor a ON a.id = mc.actor_id;

-- a) Explique, com suas palavras essa query. Por que há a necessidade de dois JOIN?
-- A primeira só une os filmes com a tabela q tem apenas os códigos dos atores.

-- b) Altere a query para que ela retorne o id e o título do filme, e o id e o nome do ator. Coloque alias para facilitar o endentimento do retorno da query
SELECT movie_id, movie_name, a.id, a.name
FROM Movies m
LEFT JOIN MovieCast mc ON m.id = mc.movie_id
JOIN Actor a ON a.id = mc.actor_id;

-- c) Anote e explique o resultado.
-- Apresenta o id do filme, o nome dele, o id do ator e o nome do ator que estão no filme

-- d) Desafio: Faça uma query que retorne todos os filmes com o nome de seus atores e as suas avaliações (nota e comentário)
SELECT movie_name, a.name, rate, comment
FROM Movies
LEFT JOIN Rating ON Movies.id = Rating.movie_id
LEFT JOIN MovieCast ON Movies.id = MovieCast.movie_id
LEFT JOIN Actor a ON a.id = MovieCast.actor_id;
