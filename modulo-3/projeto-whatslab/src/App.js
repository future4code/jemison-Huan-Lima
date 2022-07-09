import Mensagem from './Componentes/mensagem';
import {Footer, Header, Main, DivPai, DivLeft, DivCenter, DivRight} from './Componentes/style'

function App() {
  return (
    <DivPai>

        <Header>
          
        </Header>
        
        <Main>
          <DivLeft>

          </DivLeft>

          <DivCenter>

            <Mensagem/>

          </DivCenter>

          <DivRight>

          </DivRight>
        </Main>
        <Footer>

          <h5>Copyright 2022 Labenu All rights reserved. 
            R. Pais Leme, 215, Conjunto 820, Pinheiros. 
            CEP 05424-150</h5>

        </Footer>

    </DivPai>
  );
}

export default App;
