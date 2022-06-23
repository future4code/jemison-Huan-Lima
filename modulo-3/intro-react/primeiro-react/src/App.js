import './App.css';
import logoHuan from './img/logo.jpg'

function App() {

  const titulo = 'Olá, eu sou Huan, bem vindo ao meu perfil!'
  const paragrafo = 'Está página marca a criação do meu primeiro react, sendo um marco no meu desenvolvimento como pessoa desenvolvedora! Daqui pra frente o céu é o limite!'
  const mandarMensagem =()=>{
    alert('Tenha uma boa noite!')
  }

  return (
    <div className="App">
      <h1>{titulo}</h1>
      <img src={logoHuan} className='Logo-Huan' alt='Imagem de perfil de Huan'/>
      <p>{paragrafo}</p>
      <button onClick={mandarMensagem}>Clique aqui</button>
    </div>
  );
}

export default App;
