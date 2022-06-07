import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import SmallCard from './components/SmallCard/SmallCard';
import NavCard from './components/NavCard/NavCard';
/* 
const imageButtonContainer =   display: flex;
align-items: center;
border: 1px solid black;
border-radius: 50px;
width: 200px;
padding: 15px 30px;
margin: 10px auto;
 */

function App() {
  return (
    <div className="App">
      <div className="page-section-nav-container">
        <NavCard 
          imagem="./components/fotoPessoal.jpeg" 
          section="Início" 
        />

        <NavCard 
          imagem="./components/fotoPessoal.jpeg" 
          section="Minha rede" 
        />

        <NavCard 
          imagem="./components/fotoPessoal.jpeg" 
          section="Vagas" 
        />

        <NavCard 
          imagem="./components/fotoPessoal.jpeg" 
          section="Mensagens" 
        />

        <NavCard 
          imagem="./components/fotoPessoal.jpeg" 
          section="Notificações" 
        />

        <NavCard 
          imagem="./components/fotoPessoal.jpeg" 
          section="Experimente o Premium" 
        />
      </div>

      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="./components/fotoPessoal.jpeg" 
          nome="Jil Mayumi Moutinho" 
          descricao="Oi, eu sou a JIL. Estudante da Labenu. Adoro achar que entendi tudo na aula e perceber que não entendi nada na hora dos exercícios. Por isso estou sempre nos plantões!"
        />
        
        <ImagemButton 
          imagem="./ImagemButton/lideresdeti.jpg" 
          texto="Venha conhecer mais"
        />

        <SmallCard 
          imagem="./components/fotoPessoal.jpeg" 
          tituloInfo="E-mail" 
          info="emailDeMentiraDaJil@gmail.com"
        />

        <SmallCard 
          imagem="./components/fotoPessoal.jpeg" 
          tituloInfo="Endereço" 
          info="Rua dos bobos número zero"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="data:image/png;base64,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" 
          nome="Labenu" 
          descricao="Estudando programação na Labenu!" 
        />
        
        <CardGrande 
          imagem="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMllDi6ZloOeyNsCPLofUU-f8SLl9T21I1Yg&usqp=CAU" 
          nome="CTE" 
          descricao="Auditoria e implantação de sistema de gestão integrada." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
