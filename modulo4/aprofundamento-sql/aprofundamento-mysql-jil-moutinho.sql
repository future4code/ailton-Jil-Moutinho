USE `ailton-jil-moutinho`;
SET SQL_SAFE_UPDATES = 0;

-- Ex1
CREATE TABLE Actor (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
    gender VARCHAR(6) NOT NULL
);

-- a. FLOAT info de num não inteiro
-- VARCHAR info em formato string
-- DATE: info no formato data
-- NULL / NOT NULL: info que aceita ou não aceita que não seja informado 
-- PRIMARY KEY: será o identificador de cada um dos itens a ser adicionado na tabela
-- CREATE TABLE: cria tabela com os itens q colocamos

-- b O comando SHOW é bem útil para nos prover informações sobre bancos, tabelas, e mais. Utilize os comandos: SHOW DATABASES e SHOW TABLES. Explique os resultados
SHOW DATABASES;
SHOW TABLES;
-- Um mostra o data base ailton-jil-moutinho e o outro o nome da tabela criada

-- c O comando DESCRIBE pode ser usado para ver estrutura de uma tabela. Utilize o comando  DESCRIBE Actor e explique os resultados
DESCRIBE Actor;
-- Mostra as informações que estão na tabela e o tipo de cada uma.

-- Ex2
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "001", 
  "Tony Ramos",
  400000,
  "1948-08-25", 
  "male"
);

-- a crie a atriz Glória Pires, com o id 002, salário R$1.200.000 e data de nascimento 23 de Agosto de 1963
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "Glória Pires",
  1200000,
  "1963-08-23", 
  "female"
);

-- b Cria ator com msm id e descreva o q acontece. 
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);
-- Código de erro 1062. entrada duplicada 002 para chave primária. Ou seja já tem alguem com esse identificdor primário.alter

-- c Crie, veja o erro dá e descreva.
INSERT INTO Actor (id, name, salary)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);
-- Código de erro: 1136. A contagem de colunas não corresponde à contagem de valores na linha 1
-- Ou seja informei q iria passar 3 valores e informei 5.

-- d Crie, veja o erro dá e descreva.
INSERT INTO Actor (id, salary, birth_date, gender)
VALUES(
  "004",
  400000,
  "1949-04-18", 
  "male"
);
-- Código de erro: 1364. O campo 'nome' não tem um valor padrão. Nenhum dos campos dessa tabela tem valor definido como default e nem é permitido q seja nulo, então ele n gera sozinho sem informar.

-- e 
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Tira Paes",
  719333.33,
  1979-03-26, 
  "female"
);
-- Código de erro: 1292. Valor de data incorreto: '1950' para a coluna 'birth_date' na linha 1. Pq a data é do tipo varchar e não número.

-- f Corrigindo os erros.
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  1300000,
  "1929-10-19", 
  "female"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004", 
  "Antônio Fagundes",
  400000,
  "1949-04-18", 
  "male"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "006", 
  "Juliana Tira Paes",
  719333.33,
  "1979-03-26", 
  "female"
);

-- Ex 3
SELECT * FROM Actor;
SELECT id, salary from Actor;
SELECT id, name from Actor WHERE gender = "male";

-- a Escreva uma query que retorne todas as informações das atrizes
SELECT * from Actor WHERE gender = "female";

 -- b Escreva uma query que retorne o salário do ator com o nome Tony Ramos
 SELECT salary from Actor WHERE name = "Tony Ramos";
 
 -- c Escreva uma query que retorne todas as informações que tenham o gender com o valor "invalid". Explique o resultado
  SELECT * from Actor WHERE gender = "invalid";
  -- Retornou nenhum pois todos estão definidos.
 
 -- d Escreva uma query que retorne o id, nome e salário de todos que tenham o salário com o valor máximo de R$500.000
   SELECT id, name, salary from Actor WHERE salary <= 500000;
 
 -- e Rode, veja o erro dá e descreva. Reescreva corrigindo.
 SELECT id, nome from Actor WHERE id = "002";
 -- Código de erro: 1054. Coluna desconhecida 'nome' na 'lista de campos'. Pq a tabela esta criada com NAME em ingles e não em PT.
 SELECT id, name from Actor WHERE id = "002";
 
 -- Ex 4 
SELECT * FROM Actor WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000;

-- `BETWEEN`: permite verificar se um valor está entre dois: `BETWEEN valor1 AND valor2`.
-- `NOT`: que indica uma negação de comparação. Pode ser usado antes de outros operadores como: `NOT LIKE`, `NOT BETWEEN`
 
-- a) *Explique com as suas palavras a query acima*
-- Selecionar todas as informações da taleba Actor onde o nome começa com A e depois pode ter qqr coisa (%) OU nome começa com J e depois pode ter qqr coisa (%) E o sario é maior 1 300000

-- b) *Escreva uma query com os atores que não comecem com a letra "A" e tenham o salário maior do que R$350.000,00*
SELECT * FROM Actor WHERE name NOT LIKE "A%" AND salary > 350000;

-- c) *Escreva uma query com os atores que possuam "G" ou "g" em qualquer parte do nome.* 
SELECT * FROM Actor WHERE name LIKE "%g%" OR name LIKE "%G%";
SELECT * FROM Actor WHERE name LIKE "%g%";
SELECT * FROM Actor WHERE name LIKE "%G%";

-- d) *Escreva uma query com os atores que tenham a letra "a" ou "A" ou "g" ou "G" no nome e o salário entre R$350.000,00 e R$900.000,00*
SELECT * FROM Actor WHERE (name LIKE "%g%" OR name LIKE "%a%") AND salary BETWEEN 350000 AND 900000;
SELECT * FROM Actor WHERE (name LIKE "%t%") AND salary BETWEEN 350000 AND 900000;

-- Ex5  a. criar a tabela de Filmes com as informações: id, nome, sinopse, data de lançamento e avaliação (que pode ser de 0 a 10)
CREATE TABLE Movies (
id VARCHAR(255) PRIMARY KEY,
movie_name VARCHAR(255) NOT NULL,
synopsis TEXT(255) NOT NULL,
release_date DATE NOT NULL,
review INT NOT NULL
);
-- A diferença básica é que o tipo TEXT sempre vai ser armazenado em áreas de armazenamento de blob e o varchar sempre tentará armazenar os dados diretamente nas linhas, exceto caso ele exceda o limite de 8k e daí ele será armazenado como blob.
-- Tem q ter id q será o identificador, o nome q é string, sinopse, texto pq pode ser grande, a data de lançamento, tido data, e a avaliacao q é um número inteiro todas as info devem ser informadas.

-- b 
INSERT INTO Movies (id, movie_name, synopsis, release_date, review)
VALUES(
"001",
"Se Eu Fosse Você",
"Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
"2006-01-06",
"7"
);

INSERT INTO Movies (id, movie_name, synopsis, release_date, review)
VALUES(
"002",
"Doce de mãe",
"Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
"2012-01-06",
"7"
);

INSERT INTO Movies (id, movie_name, synopsis, release_date, review)
VALUES(
"003",
"Dona Flor e Seus Dois Maridos",
"Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce",
"2017-11-02",
"8"
);

INSERT INTO Movies (id, movie_name, synopsis, release_date, review)
VALUES(
"004",
"Cidade de Deus",
"Buscapé é um jovem pobre, negro e sensível, que cresce em um universo de muita violência. Ele vive na Cidade de Deus, favela carioca conhecida por ser um dos locais mais violentos do Rio. Amedrontado com a possibilidade de se tornar um bandido, Buscapé é salvo de seu destino por causa de seu talento como fotógrafo, o qual permite que siga carreira na profissão. É por meio de seu olhar atrás da câmera que ele analisa o dia a dia da favela em que vive, onde a violência aparenta ser infinita.",
"2002-08-30",
"10"
);

-- Ex 6
-- a) Retorne o id, título e avaliação a partir de um id específico;
SELECT id, movie_name, review FROM Movies WHERE id = "004";

-- b) Retorne um filme a partir de um nome específico;
SELECT * FROM Movies WHERE movie_name = "Cidade de Deus";

-- c) Retorne o id, título e sinopse dos filmes com avaliação mínima de `7`
SELECT id, movie_name, synopsis FROM Movies WHERE review > 7;

-- Ex 7
-- a) Retorna um filme cujo título contenha a palavra `vida`
SELECT * FROM Movies WHERE movie_name LIKE "%vida%";
SELECT * FROM Movies WHERE movie_name LIKE "%Cidade%";

-- b) Realize a pesquisa de um filme, ou seja: pesquise se o termo de busca está contido no título ou na sinopse. Utilize qualquer `TERMO DE BUSCA` para exemplificar.
SELECT * FROM Movies WHERE (movie_name LIKE "%dia%" OR synopsis LIKE "%dia%");

-- c) Procure por todos os filmes que já tenham lançado
SELECT * FROM Movies WHERE release_date < current_date();
-- current_date é uma função q traz a data de hoje

-- d) Procure por algum filme que já tenha lançado, com o termo de busca contido no título ou sinopse e com a avaliação maior do que `7`.
SELECT * FROM Movies WHERE (movie_name LIKE "%dia%" OR synopsis LIKE "%dia%") AND release_date < current_date() AND review > 7;

-- DIA DE APRONFUNDAMENTO - - - - - - - - - - - - - - - - - - - - - - - - - 
-- Ex1 d 
ALTER TABLE Actor CHANGE gender gender VARCHAR(100);

-- Ex2 a
UPDATE Actor SET name = "Fernanda Montenegro Torres" WHERE id = "003";
UPDATE Actor SET birth_date = "1929-10-16"  WHERE id = "003";

-- b
UPDATE Actor SET name = "JULIANA TIRA PAES" WHERE name = "Juliana Tira Paes";
UPDATE Actor SET name = lower(name) WHERE name = "Juliana Tira Paes";

-- c
UPDATE Actor SET
name = "Paulo Vieira",
birth_date = "1992-11-10",
salary = "40000",
gender = "male"
WHERE id = "005";

-- d 
UPDATE Actor SET name = "Paulo Vieira Teste" WHERE id = "006";

-- Ex3
-- a 
DELETE from Actor WHERE name = "juliana tira paes";
SELECT * from Actor;

-- b 
DELETE from Actor WHERE gender = "male" AND salary > 1000000;

-- Ex4
-- a
SELECT max(salary) from Actor;
SELECT * from Actor WHERE salary = max(salary); 
-- Não funcionou

-- b 
SELECT min(salary) from Actor;

-- c 
SELECT COUNT(*) as mulheres from Actor WHERE gender = "female";

-- d 
SELECT SUM(salary) from Actor;

-- Ex5
-- a 
-- SELECT COUNT(*), gender from Actor GROUP BY gender;
-- Conta a quantidade de pessoas separados por gênero (3 homens e 2 mulheres)

-- b 
SELECT id, name from Actor ORDER BY name DESC;

-- c
SELECT * from Actor ORDER BY salary ASC;

-- d
SELECT * from Actor ORDER BY salary DESC LIMIT 3;

-- e 
SELECT AVG(salary) gender from Actor GROUP BY gender;

-- Ex6
-- a 
ALTER TABLE Movies ADD playing_limit_date DATE;

-- b 
ALTER TABLE Movies CHANGE review review FLOAT;

-- c 
UPDATE Movies SET playing_limit_date = "2018-04-01" WHERE id = "003";
UPDATE Movies SET playing_limit_date = "2022-12-31" WHERE id = "004";

-- d 
DELETE from Movies WHERE id = "001";
UPDATE Movies SET synopsis = "Blablabla" WHERE id = "001";
-- Código de erro: 1054. Coluna desconhecida 'sinopse' na 'lista de campos'
-- 0 linha(s) afetada(s) Linha(s) correspondida(s): 0 Alterado: 0 Avisos: 0. Não muda nada e nem acrescenta nada

-- Ex 7
-- a 
SELECT COUNT(*) from Movies WHERE review > 7.5;

-- b 
SELECT AVG(review) from Movies;

-- c
SELECT COUNT(*) from Movies;

-- d 
SELECT COUNT(*) from Movies WHERE datediff(current_date(), release_date) >= 0; 

-- e 
SELECT max(review) from Movies;

-- f
SELECT min(review) from Movies;

-- Ex8
-- a 
SELECT * from Movies ORDER BY movie_name ASC;

-- b 
SELECT * from Movies ORDER BY movie_name DESC LIMIT 5;

-- c 
SELECT * from Movies WHERE playing_limit_date > current_date() ORDER BY release_date DESC LIMIT 3;

-- d
SELECT * from Movies ORDER BY review DESC LIMIT 3;
SELECT * FROM Movies;
SET SQL_SAFE_UPDATES = 1;