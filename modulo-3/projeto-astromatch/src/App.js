import './App.css';
import HomePage from './components/homepage/HomePage';
import MatchsPage from './components/matchspage/MatchsPage';
import{useState} from 'react';


function App() {

  const [screen, setScreen] = useState('start')

      const changeScreen = (screen) =>{
          setScreen(screen)
      }

      const renderScreen = () =>{
          switch (screen) {
              case 'start':
                  return <HomePage changeScreen={changeScreen}/>
              case 'list':
                  return <MatchsPage changeScreen={changeScreen} />  
              default:
                  return null;      
          }
      }


  return (
    <div className="App">
      {renderScreen()}
    </div>
  );
}

export default App;
