Ex1 A primeira implementação que vamos fazer refere-se à função que vai cuidar do hash da nossa senha. Vamos utilizar um bem famoso e muito recomendado para senhas de usuários: *bcryptjs*. A principal vantagem dele é que é gerada uma string aleatória e atrelada à entrada da criptografia. Isso **impede** que se faça o ataque chamado de ***rainbow table*,** que consiste em montar uma tabela com infinitas possibilidades da saída do *hash*. 

Abaixo, há o exemplo de uso da função de *hash*

import * as bcrypt from "bcryptjs";
const rounds = Number(process.env.BCRYPT_COST);
const salt = await bcrypt.genSalt(rounds);
const result = await bcrypt.hash(s, salt);
console.log("encrypted message: ", result);

a) O que são os round e salt? Que valores são recomendados para o round? Que valor você usou? Por quê?
- Salt é uma string aleatória que faz com que a hash seja imprevisível. Round é o numero para criptografar.

b) *Instale o bcryptjs no seu projeto e comece criando a função generateHash(), que será responsável por **criptografar** uma string usando o bcryptjs.  ***** 

c) *Agora, crie a função que verifique se uma string é correspondente a um hash, use a função `compare` do bcryptjs*

Ex2 Na aula de ontem, implementamos os endpoints de signup e login sem utilizar a criptografia. Vamos agora colocar isso. A ideia é simples: no cadastro, antes de salvar o usuário no banco, temos que criptografar a senha, para que, no banco, não fique a senha em si. Já, no login, em vez de comparar a senha enviada diretamente com a salva no banco, usaremos a biblioteca de Hash para isso. 
a) Para realizar os testes corretamente, qual deles você deve modificar primeiro? O cadastro ou o login? Justifique.
O cadastro para enviar na senha do login (hash) pro banco de dados ou seja a senha já criptografada.

b) *Faça a alteração do primeiro endpoint*

c) *Faça a alteração do segundo endpoint*

d) *No exercício de ontem, nós criamos o endpoint `user/profile`. Também temos que modificar esse endpoint devido à adição da criptografia? Justifique.*
Não precisa pois este endpoint não utiliza senha, nem a do usuario e nem a criptografada.

Ex3 Agora, vamos pensar em um pouco nas funcionalidades relacionadas aos tipos de usuário. Para isso, vamos ter que fazer umas modificações no banco de dados.
a) Altere a sua tabela de usuários para ela possuir uma coluna role. Considere que pode assumir os valores normal  e admin. Coloque normal como valor padrão.
No MySQL: ALTER TABLE User ADD role VARCHAR(7) NOT NULL DEFAULT "normal";

b) Altere o type AuthenticationData e a função getData() para representarem esse novo tipo no token.
No arquivo TokenClass.

c) Altere o cadastro para receber o tipo do usuário e criar o token com essa informação. (Não esqueça de adicionar na função query para inserir agora o valor de role do usuário à coluna role no banco)
No arquivo TokenClass e no endpoint.

d) Altere o login para criar o token com o role do usuário

Ex4 Agora, vamos usar esse role no endpoint /user/profile. Somente o usuários "normais" podem acessar esse endpoint. 
a) Altere o endpoint para que retorne um erro de Unauthorized para os usuários que "não sejam normais" e tentem acessar esse endpoint
Modificado end point, adicionado role no data, criado novo erro, model adicionado getRole.

Endpoint: getByIdProfile

Ex5 Implemente o endpoint que realizará a deleção de um usuário. As especificações são:
- *Verbo/Método*: **DELETE**
- *Path:* `/user/:id`
- Somente admins podem acessar esse endpoint

Endpoint: delUserById

Ex6 Implemente o endpoint que retorne as informações (id e email) de um usuário a partir do seu id. As especificações são:
- *Verbo/Método*: **GET**
- *Path:* `/user`
- Tanto admins como usuários normais conseguem usar essa funcionalidade

Endpoint: getById

Ex7 O nosso backend está com muito código repetido (é só ver o quão parecido o login e o signup estão). Faça um refactor do código criando uma estrutura que permita reutilizar melhor o código.
