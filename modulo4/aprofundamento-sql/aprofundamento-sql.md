### Ex1 Leia os comandos abaixo e indique o que eles fazem
a. ALTER TABLE Actor DROP COLUMN salary;
Deleta columa salary da tabela.

b. ALTER TABLE Actor CHANGE gender sex VARCHAR(6);
Modifica o tipo de entrada da coluna gender do nome gender para sex e para varchar de 6 caracteres.

c. ALTER TABLE Actor CHANGE gender gender VARCHAR(255);
Modifica o tipo de entrada da coluna gender, mantem o nome mas determina varchar de 6 caracteres.

d. Agora, altere a coluna gender da tabela ACTOR para que ele aceite strings com até 100 caracteres
```
ALTER TABLE Actor CHANGE gender gender VARCHAR(100);
```

### Ex2 
a. Escreva uma query que atualize o nome e a data de nascimento do ator com o id 003
```
UPDATE Actor SET name = "Fernanda Montenegro Torres", birth_date = "1929-10-16" WHERE id = "003"
```

b
```
UPDATE Actor SET name = "JULIANA TIRA PAES" WHERE name = "Juliana Tira Paes";
UPDATE Actor SET name = lower(name) WHERE name = "Juliana Tira Paes";
```

c
```
UPDATE Actor SET
name = "Paulo Vieira",
birth_date = "1992-11-10",
salary = "40000",
gender = "male"
WHERE id = "005";
```

d 
```
UPDATE Actor SET name = "Paulo Vieira Teste" WHERE id = "006";
```
Não dá erros, mas não muda nem acrescenta nada.

### Ex3
a 
```
DELETE from Actor WHERE name = "juliana tira paes";
```

b 
```
DELETE from Actor WHERE gender = "male" AND salary > 1000000;
```

### Ex4
a
```
SELECT max(salary) from Actor;
```
SELECT * from Actor WHERE salary = max(salary); 
-- Não funcionou

b 
```
SELECT min(salary) from Actor;
```

c 
```
SELECT COUNT(*) as mulheres from Actor WHERE gender = "female";
```

d 
```
SELECT SUM(salary) from Actor;
```

### Ex5
a 
```
SELECT COUNT(*), gender from Actor GROUP BY gender;
```
Conta a quantidade de pessoas separados por gênero (3 homens e 2 mulheres)

b 
```
SELECT id, name from Actor ORDER BY name DESC;
```

c
```
SELECT * from Actor ORDER BY salary ASC;
```

d
```
SELECT * from Actor ORDER BY salary DESC LIMIT 3;
```

e 
```
SELECT AVG(salary) gender from Actor GROUP BY gender;
```

### Ex6
a 
```
ALTER TABLE Movies ADD playing_limit_date DATE;
```

b 
```
ALTER TABLE Movies CHANGE review review FLOAT;
```

c 
```
UPDATE Movies SET playing_limit_date = "2018-04-01" WHERE id = "003";
UPDATE Movies SET playing_limit_date = "2022-12-31" WHERE id = "004";
```

d 
```
DELETE from Movies WHERE id = "001";
UPDATE Movies SET synopsis = "Blablabla" WHERE id = "001";
```
Código de erro: 1054. Coluna desconhecida 'sinopse' na 'lista de campos'
0 linha(s) afetada(s) Linha(s) correspondida(s): 0 Alterado: 0 Avisos: 0. Não muda nada e nem acrescenta nada

### Ex 7
a 
```
SELECT COUNT(*) from Movies WHERE review > 7.5;
```

b 
```
SELECT AVG(review) from Movies;
```

c
```
SELECT COUNT(*) from Movies;
```

d 
```
SELECT COUNT(*) from Movies WHERE datediff(current_date(), release_date) >= 0; 
```

e 
```
SELECT max(review) from Movies;
```

f
```
SELECT min(review) from Movies;
```

### Ex8
a 
```
SELECT * from Movies ORDER BY movie_name ASC;
```

b 
```
SELECT * from Movies ORDER BY movie_name DESC LIMIT 5;
```

c 
```
SELECT * from Movies WHERE playing_limit_date > current_date() ORDER BY release_date DESC LIMIT 3;
```

d
```
SELECT * from Movies ORDER BY review DESC LIMIT 3;
SELECT * FROM Movies;
SET SQL_SAFE_UPDATES = 1;
```