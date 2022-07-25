import { useState, useRef } from 'react';
import { Header, Footer, Main_route } from './page'
import './App.scss';
import Container from './components/container/container';
import Routel from './routes/routes';
function App() {
    return (
      <Container>
        <Header />
        <Main_route>
          <Routel />
        </Main_route>
        <Footer />
      </Container>
    )
}

export default App;
