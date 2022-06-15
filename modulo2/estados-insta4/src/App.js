import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';
import Post02 from './components/Post/Post02';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <Post02></Post02>
        <Post
          nomeUsuario={'paulo'}
          fotoUsuario={'http://flimsy-scale.surge.sh/img/paulo.jpeg'}
          fotoPost={'https://picsum.photos/200/150?random=1'}
        />

        <Post
          nomeUsuario={'luiz'}
          fotoUsuario={'https://media-exp1.licdn.com/dms/image/C4D03AQHr7FHDGTQ7pg/profile-displayphoto-shrink_200_200/0/1611414322397?e=1659571200&v=beta&t=2ZztbflGFxhAvN7SlaO2lsexTkwnpLaYEasJtqJcHo4'}
          fotoPost={'https://picsum.photos/200/150?random=2'}
        />

        <Post
          nomeUsuario={'indio'}
          fotoUsuario={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAiN0BkR_SuKvlkQd6yCPHIDDblq7iWWTdq2rXxMLyUQ8feo2tZm775rU-bVjyO_i76i8&usqp=CAU'}
          fotoPost={'https://picsum.photos/200/150?random=3'}
        />
      </MainContainer>
    );
  }
}

export default App;
