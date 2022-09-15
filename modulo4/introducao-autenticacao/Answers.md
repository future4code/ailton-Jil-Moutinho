// Ex 1 Na autenticação de usuários o elemento mais fundamental talvez seja o id. É muito importante encontrar um que seja fácil de guardar e que garanta unicidade. Para isso usaremos a versão v4 do UUID, uma das mais recomendadas para isso. O uso dele é simples, veja abaixo:
const id = v4();

console.log("Generated Id: ", id);

// a) Qual a sua opinião em relação a usar strings para representar os ids? Você concorda que seja melhor do que usar números?
// Sim pq fica mais dificil de burlar.

// b) A partir de hoje vamos tentar isolar, ao máximo, as nossas lógicas dentro de funções. Isso vai deixar nosso código mais organizado e aumentar a facilidade da manutenção e refatoração. Dado isso, crie uma função para gerar um id.
// criado na pasta services.

// Ex2 Agora que já possuímos um id, podemos começar a modelagem do banco. O nosso usuário precisa ter um email e uma senha salva para que a gente consiga fazer a autenticação dele. Na hora de salvar essas informações na tabela, é interessante que façamos uma função específica para isso.
// a) Explique o código acima com as suas palavras.
// Chamou a tabela User de userTableName.
// Criou conexão com banco de dados.
// Criou a função de criar usuário.
// Coloquei na pasta data no arquivo UserData

// b) Comece criando a tabela de usuários. Coloque a query que você utilizou no arquivo de respostas.
/* CREATE TABLE User (
  id VARCHAR(255) PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL
); */

// c) Pela mesma justificativa do exercício anterior, crie uma função para ser responsável pela criação de usuários no banco.
// Feito no data.

// Ex3 Antes de poder fazer o endpoint de cadastro, precisamos de uma forma para gerar o token de autenticação do usuário. Para isso, vamos usar o JWT. Ele possui uma função que permite gerar o token do usuário, que recebe três informações:
// - os dados que serão salvos no token (no nosso caso, o id);
// - a chave secreta usada pra criptografar o token;
// - algumas configurações, como o tempo de expiração
// a) O que a linha as string faz? Por que precisamos usar ela ali?
// Transforma em string

// b) Agora, crie a função que gere o token. Além disso, crie um type  para representar o input dessa função.

// Ex4 Pronto, com essas três funções preparadas podemos criar o nosso endpoint. As informações dele são:
/* 
- Verbo/Método*: POST
- Path*: `/user/signup`
- Input:* O body da requisição deve ser 
- Output: O body da resposta deve ser*/
// a) Crie o endpoint que realize isso, com as funções que você implementou anteriormente
const newUser = new userEndpoint();

app.post("/user/signup", newUser.create);

// b) *Altere o seu endpoint para ele não aceitar um email vazio ou que não possua um `"@"`*
// Linha 14 do código no user endpoint
// c) *Altere o seu endpoint para ele só aceitar uma senha com 6 caracteres ou mais*
// Linha 14 do código no user endpoint

//Ex5 No login, vamos receber o email e a senha do usuário. Então, vamos precisar de uma função que realize essa busca no banco de dados para gente. 
//a) Crie uma função que retorne as informações de um usuário a partir do email
app.get("/user/byemail", newUser.getByEmail);

// Ex6 Agora, vamos implementar o endpoint de login, com as seguintes especificações:
/* - *Verbo/Método*: POST
- *Path*: `/user/login`
- *Input:* O body da requisição deve ser 
- Output: O body da resposta deve ser*/
// a) Crie o endpoint que realize isso, com as funções que você implementou anteriormente
// b) Altere o seu endpoint para ele não aceitar um email vazio ou que não possua um "@"
app.get("/user/login", newUser.login)

// Ex7 a) O que a linha as any faz? Por que precisamos usá-la ali?
// Pq pode retornar como jwt e não é possível tipar arquivos neste formato, portanto usamos any.

// b) Crie uma função que realize a mesma funcionalidade da função acima
// Linha 15 do arquivo TokenClass

// Ex8 Agora, vamos criar um endpoint que retorne as informações do usuário logado. As especificações dele estão abaixo:
/* - *Verbo/Método*: GET
- *Path*: `/user/profile`
- *Input:* Deve receber, nos headers, o token de autenticação: Authorization: token.do.usuario
- Output: O body da resposta deve ser
{
	"id": "id do usuário",
	"email": "email do usuário"
} */
// a) Comece criando uma função no data que retorne o usuário a partir do id
// Linha 37

// b) Crie o endpoint com as especificações passadas