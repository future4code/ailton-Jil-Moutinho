USE `ailton-jil-moutinho`;

-- PROJETO TODO LIST

-- Usuários. O cadastro deles deve ser simples, pedindo: um nome, um apelido (nickname) e um email
CREATE TABLE UsersList (
id INT(3) AUTO_INCREMENT PRIMARY KEY,
user_name VARCHAR(255) NOT NULL,
nickname VARCHAR(255) UNIQUE NOT NULL,
email VARCHAR(255) UNIQUE NOT NULL
);

-- As tarefas são definidas por: título, descrição, data limite até a qual precisa ser feita, status e usuário pedinte (o que criou a tarefa). Existem os usuários responsáveis por uma tarefa, ou seja, aqueles que terão que executa-las. Mais de um usuário pode ser diretamente responsável de mesma tarefa. 
-- Os status das tarefas são 3: to do ("a fazer"), doing ("fazendo") e done ("feita").
CREATE TABLE TasksList (
id INT(3) PRIMARY KEY AUTO_INCREMENT,
title VARCHAR(255) NOT NULL,
task_description VARCHAR(255) NOT NULL,
limit_date DATE NOT NULL,
task_status VARCHAR(255) NOT NULL DEFAULT "to_do",
creator INT(3) NOT NULL,
responsible INT(3),
FOREIGN KEY (creator) REFERENCES UsersList(id),
FOREIGN KEY (responsible) REFERENCES UsersList(id)
);

INSERT INTO UsersList
VALUES(
001,
"Jil",
"Jil",
"jil@jil.com"
);

INSERT INTO UsersList (user_name, nickname, email)
VALUES(
"Mariana",
"Mari",
"mari@mari.com"
);

INSERT INTO UsersList (user_name, nickname, email)
VALUES(
"Talita",
"Talitinha",
"tali@tali.com"
);

ALTER TABLE TasksList
CHANGE COLUMN id id INT(3) NOT NULL AUTO_INCREMENT;

INSERT INTO TasksList (title, task_description, limit_date, creator, responsible)
VALUES (
"Wake up",
"Wake up, stretch, change clothes",
"2022-08-26",
001,
001
);

ALTER TABLE TasksList
CHANGE COLUMN responsible responsible INT(3);

DROP TABLE TasksList;

DESCRIBE TasksList;

SELECT * from TasksList;
SELECT * from UsersList;