import React from 'react';
import {PageContainer, AllApp, Title2, NavContainer} from './App.style'
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import SmallCard from './components/SmallCard/SmallCard';
import NavCard from './components/NavCard/NavCard';
import foto from './img/fotoPessoal.jpeg'
import botaoSaibaMais from './img/lideresdeti.jpg'
import email from "./img/email.jpeg"
import endereco from './img/local.jpeg'
import inicio from './img/inicio.png'
import rede from './img/2.png'
import vagas from './img/3.png'
import mensagens from './img/4.png'
import sininho from './img/5.png'
import labenu from './img/labenu.png'

function App() {
  return (
    <AllApp>
      <NavContainer>
        <NavCard 
          imagem={inicio}
          section="Início" 
        />

        <NavCard 
          imagem={rede}
          section="Minha rede" 
        />

        <NavCard 
          imagem={vagas}
          section="Vagas" 
        />

        <NavCard 
          imagem={mensagens}
          section="Mensagens" 
        />

        <NavCard 
          imagem={sininho}
          section="Notificações" 
        />

        <NavCard 
          section="Experimente o Premium Gratis" 
        />
      </NavContainer>

      <PageContainer>
        <Title2>Dados pessoais</Title2>
        <CardGrande 
          imagem={foto}
          nome="Jil Mayumi Moutinho" 
          descricao="Oi, eu sou a JIL. Estudante da Labenu. Adoro achar que entendi tudo na aula e perceber que não entendi nada na hora dos exercícios. Por isso estou sempre nos plantões!"
        />
        

        <ImagemButton 
          imagem={botaoSaibaMais} 
          texto="Saber mais"
        />


        <SmallCard 
          imagem={email}
          tituloInfo="E-mail" 
          info="emailDeMentiraDaJil@gmail.com"
        />

        <SmallCard 
          imagem={endereco}
          tituloInfo="Endereço" 
          info="Rua dos bobos número zero"
        />
      </PageContainer>

      <PageContainer>
        <Title2>Experiências profissionais</Title2>
        <CardGrande 
          imagem={labenu}
          nome="Labenu" 
          descricao="Estudando programação na Labenu!" 
        />
        
        <CardGrande 
          imagem="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMllDi6ZloOeyNsCPLofUU-f8SLl9T21I1Yg&usqp=CAU" 
          nome="CTE" 
          descricao="Auditoria e implantação de sistema de gestão integrada." 
        />
      </PageContainer>

      <PageContainer>
        <Title2>Minhas redes sociais</Title2>
        <ImagemButton
        imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />
      </PageContainer>
    </AllApp>
  );
}

export default App;
