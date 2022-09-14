CREATE TABLE UserCookenu (
	user_id VARCHAR(255) PRIMARY KEY UNIQUE,
    email VARCHAR(255) UNIQUE NOT NULL,
    user_password VARCHAR(255) NOT NULL,
    user_name VARCHAR(255) NOT NULL
);

SELECT * FROM UserCookenu;

CREATE TABLE Recipes (
    recipe_id VARCHAR(255) NOT NULL PRIMARY KEY UNIQUE,
    title VARCHAR(255) NOT NULL,
    recipe_description VARCHAR(255) NOT NULL,
    creation_date DATE NOT NULL,
    creator_id VARCHAR(255) NOT NULL,
    FOREIGN KEY (creator_id) REFERENCES UserCookenu(user_id)
);

SELECT * FROM Recipes;