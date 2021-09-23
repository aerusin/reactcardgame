import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CARDS from './assets/cards.json'
import { CardViewer } from './components/CardViewer';
import { ControlPanel } from './components/ControlPanel'
import { Container, Row } from 'react-bootstrap'
import { Card } from './interfaces/card';

function App(): JSX.Element {
  const [activeCard, setActiveCard] = useState<Card>(CARDS[0] as Card);
  return (
    <Container className="App">
      <Row>
      <CardViewer card={activeCard}></CardViewer>
      <ControlPanel setCard={setActiveCard}></ControlPanel>
      </Row>
      </Container>
  );
}

export default App;
