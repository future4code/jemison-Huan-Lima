import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
function App() {

  const dadosDePosts = [
    {nomeUsuario:'paulinha', 
    fotoUsuario:'https://picsum.photos/50/50',
    fotoPost:'https://picsum.photos/200/150'
    },
    {nomeUsuario:'amandinha', 
    fotoUsuario:'https://picsum.photos/50/51',
    fotoPost:'https://picsum.photos/200/100'
    },
    {nomeUsuario:'joão', 
    fotoUsuario:'https://picsum.photos/50/40',
    fotoPost:'https://picsum.photos/200/120'
    }
  ]

  const postagem = dadosDePosts.map((item, index) => {
    return(
        <Post key = {index}
          nomeUsuario = {item.nomeUsuario}
          fotoUsuario = {item.fotoUsuario}
          fotoPost = {item.fotoPost}
          />
    )
    
  })

return(
  <MainContainer>
            {postagem}
  </MainContainer>)
};

export default App;