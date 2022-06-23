import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://media-exp1.licdn.com/dms/image/C5603AQH-Ro5aKJnRrA/profile-displayphoto-shrink_200_200/0/1643395557802?e=1661385600&v=beta&t=Ici0YPxHIOVhE8OKTORlWizmC1breu4x2pcboKkAHhI" 
          nome="Huan Silva Lima" 
          descricao="Olá, eu sou Huan, desenvolvedor web fullstack em formação pela LABENU. Crio, desenvolvo e evoluo!"
        />
        
        <ImagemButton 
          imagem="https://cdn-icons-png.flaticon.com/512/271/271210.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-dados">
        <CardPequeno
          imagem="https://www.seekpng.com/png/detail/84-840959_email-comments-call-and-email-symbol.png" 
          dado="E-mail: "
          descricao="huansilvalima@gmail.com" 
        />
      </div>

      <div className="page-section-dados">
        <CardPequeno
          imagem="https://i.pinimg.com/originals/88/bc/00/88bc005a6b728cafbf76668607205b25.jpg" 
          dado="Endereço: "
          descricao="Rua Severina Pereira de Melo, 150" 
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Labenu" 
          descricao="Adquirindo experiência em projetos utilizando HTML, CSS, Javascript e React." 
        />
        
        <CardGrande 
          imagem="https://www.leonardovicentin.com.br/img/logo-globo.png" 
          nome="Globo.com" 
          descricao="Desenvolverdor Back-end, especialista em banco de dados." 
        />

        <CardGrande 
          imagem="https://logopng.com.br/logos/google-37.png" 
          nome="Google" 
          descricao="Desenvolverdor Front-end, especialista em React." 
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