<h2 align="center">🤖Projeto Labeddit🤖 </h2>

<h4 align="justify">
O projeto consiste na implementaão de uma rede social realmente funcional. Uma rede real, com cadastro, login, posts, likes e comentários. Para isso, nos baseamos no reddit.com. 
<h4/>

<h3 align="center"> Sumário  </h3>

<h3 align="center"> 

[🔗Surge](#link-surge) | [💻Projeto](#como-rodar-o-projeto-localmente) | [📚Bibliotecas](#bibliotecas-utilizadas) | 
[🛠️Tecnologias](#tecnologias-utilizadas) | [👩🏻‍💻Equipe de Dev](#equipe-desenvolvedora) | [🖥️📱Imagens](#imagens) 

<h3/>

## ✔O que funciona
-A página de login, ao fazer o login, o usuário deverá ser redirecionado para a página de feed. Há um botão "Cadastrar", que leva o usuário para a página de cadastro.
- A página de cadastro onde após cadastro de nome, email e senha, o usuário é redirecionado para a página de feed, já estando logado (ou seja, com o token salvo no LocalStorage).
- A página de feed mostra 10 posts, além de um formulário para a criação de novos. 
- As páginas só pode ser acessada por um usuário logado. Caso o usuário não esteja logado, ele é redirecionado para a página de login.
- Cada post mostra o nome do usuário que postou, o texto do post, o número de votos (positivo ou negativo) e o número de comentários. Caso o usuário tenha votado positiva ou negativamente, isso deverá estar indicado.
- Quando o usuário clicar em um post, ele é redirecionado para a página do respectivo post onde pode comentar e votar (positiva ou negativamente) no post e nos comentários.
- Paginação do feed
- Responsividade em todas as páginas, usando media queries.
- Funcionalidade de Logout.
- Alerta de erro nas operações caso ocorram
- Página de erro caso navegue por uma página não existente
- Loading em todas as páginas

## 🔗Link Surge
https://guttural-run.surge.sh/

## 💻Como rodar o projeto localmente
Siga o passo-a-passo abaixo:

| Passo                     | Comando            |
| ------------------------- | ------------------ |
| Faça o Clone              | `git clone`        |
| Instale as Dependências   | `npm install`      |
| Utilize o Script Start    | `npm start`        |

Por padrão a aplicação rodará localmente na porta 3000.

## 📚Bibliotecas utilizadas
- axios
- react-icons
- react-router-dom
- styled-components
- sweet-alert

## 🛠Tecnologias utilizadas
 <div style="display: inline_block"><br>
  <img align="center" alt="React" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg">
  <img align="center" alt="HTML" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg">
  <img align="center" alt="CSS" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg">
  </div>

## 👩🏻‍💻Equipe desenvolvedora 
<a href="https://github.com/JilMayumiMoutinho"><img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/104766367?v=4" width="100px;" alt="Foto da desenvolvedora com linkque encaminha ao github pessoal"/><br /><b>Jil Mayumi Moutinho</b></a>

## 🖥📱Imagens
 Página de login para tela desk<br />
![Captura de tela de 2022-07-29 12-02-50](https://user-images.githubusercontent.com/104766367/181831880-393cec7a-9cdb-4e8c-aa91-11241b07580a.png)

 Página de login para tela mobile<br />
![Captura de tela de 2022-07-29 12-05-24](https://user-images.githubusercontent.com/104766367/181831069-eeaa2a0f-f572-405c-8457-bf04829e2dc8.png)

 Página de cadastro para tela mobile<br />
![Captura de tela de 2022-07-29 12-05-39](https://user-images.githubusercontent.com/104766367/181831073-9fcc3ddc-dd71-4342-a7f3-8a0f9ce66670.png)
 
 Efeito de loading<br />
![Captura de tela de 2022-07-29 12-06-44](https://user-images.githubusercontent.com/104766367/181831074-10d56f54-6493-4c99-bf46-bf0934737753.png)
 
 Página de feed com indicação de voto positivo em cor mais alaranjada<br />
![Captura de tela de 2022-07-29 12-06-55](https://user-images.githubusercontent.com/104766367/181831075-f73e1ed2-2d2d-4258-b990-406d8fbfa539.png)
 
 Página de post com indicação de ausência de comentários<br />
![Captura de tela de 2022-07-29 12-07-00](https://user-images.githubusercontent.com/104766367/181831078-1cd08ae5-7c3d-4b7f-85fc-d75ccc8a2ad2.png)
