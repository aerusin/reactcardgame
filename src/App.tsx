import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CARDS from './assets/cards.json'
import { Flashcard } from './components/Flashcard';
import { NewCard } from './components/NewCard'
import { Container, Row } from 'react-bootstrap'

function App(): JSX.Element {
  return (
    <Container className="App">
      <Row>
      <Flashcard></Flashcard>
      <NewCard></NewCard>
      </Row>
      </Container>
  );
}

export default App;
