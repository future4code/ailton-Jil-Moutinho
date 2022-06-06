import React from "react";
import logoLabetube from "./logoLabetube.png";
import "./App.css";

function App() {
  const maisVistos = "Temas mais vistos";
  const titulo = "Titulo do video em React";
  const descricao = "Breve descricao de cada um dos video";
  function reproduzVideo() {
    alert("O vídeo está sendo reproduzido")
  }
  return (
    <div>
      <div className="tela-inteira">
        <header>
          <img id="logoNovo" src={logoLabetube} alt="imagem camera de video antiga"/>
          <h1>Lab Tube</h1>
          <input type="text" placeholder="Pesquisar" id="campoDeBusca" />
        </header>

        <div className="navSuperior">
        <ul>
              <li className="botoes-nav-superior">{maisVistos}</li>
              <li className="botoes-nav-superior">{maisVistos}</li>
              <li className="botoes-nav-superior">{maisVistos}</li>
              <li className="botoes-nav-superior">{maisVistos}</li>
              <li className="botoes-nav-superior">{maisVistos}</li>
            </ul>
        </div>

        <main>
          <nav className="menu-vertical">
            <ul>
              <li className="botoes-meunu-vertical"><img src="./Inicio.png" alt=""/>Inicio</li>
              <li className="botoes-meunu-vertical"><img src="./Explorar.png" alt=""/>Em alta</li>
              <li className="botoes-meunu-vertical">Inscrições</li>
              <hr />
              <li className="botoes-meunu-vertical">Originais</li>
              <li className="botoes-meunu-vertical">Histórico</li>
            </ul>
          </nav>

          <section className="painel-de-videos">
            <div className="box-pagina-principal media1"       onClick={reproduzVideo}>
              <img src="https://picsum.photos/400/400?a=1 " alt="" />
              <h4>{titulo}</h4>
              <p>{descricao}</p>
            </div>
            <div className="box-pagina-principal media2" onClick={reproduzVideo}>
              <img src="https://picsum.photos/400/400?a=2 " alt="" />
              <h4>{titulo}</h4>
              <p>{descricao}</p>
            </div>
            <div className="box-pagina-principal media3" onClick={reproduzVideo}>
              <img src="https://picsum.photos/400/400?a=3 " alt="" />
              <h4>{titulo}</h4>
              <p>{descricao}</p>
            </div>
            <div className="box-pagina-principal media4" onClick={reproduzVideo}>
              <img src="https://picsum.photos/400/400?a=4 " alt="" />
              <h4>{titulo}</h4>
              <p>{descricao}</p>
            </div>
            <div className="box-pagina-principal media5" onClick={reproduzVideo}>
              <img src="https://picsum.photos/400/400?a=5 " alt="" />
              <h4>{titulo}</h4>
              <p>{descricao}</p>
            </div>
            <div className="box-pagina-principal media6" onClick={reproduzVideo}>
              <img src="https://picsum.photos/400/400?a=6 " alt="" />
              <h4>{titulo}</h4>
              <p>{descricao}</p>
            </div>
            <div className="box-pagina-principal media7" onClick={reproduzVideo}>
              <img src="https://picsum.photos/400/400?a=7 " alt="" />
              <h4>{titulo}</h4>
              <p>{descricao}</p>
            </div>
            <div className="box-pagina-principal media8" onClick={reproduzVideo}>
              <img src="https://picsum.photos/400/400?a=8 " alt="" />
              <h4>{titulo}</h4>
              <p>{descricao}</p>
            </div>
          </section>
        </main>
    
        <footer>
        <h4>Oi! Eu moro no footer!</h4>
        </footer>
      </div>

    <script onClick={reproduzVideo} />;
    </div>
  );
}

export default App;
