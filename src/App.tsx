import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CARDS from './assets/cards.json'
import { DisplayCard } from './components/DisplayCard';
import { ControlPanel } from './components/ControlPanel'
import { Container, Row } from 'react-bootstrap'
import { Card } from './interfaces/card';

function App(): JSX.Element {
  const [activeCard, setActiveCard] = useState<Card>(CARDS[0] as Card);
  const [cardKindAddition, setCardKindAddition] = useState<boolean>(false);
  const [cardKindSubtraction, setCardSubtraction] = useState<boolean>(false);
  const [cardKindMultiplication, setCardKindMultiplication] = useState<boolean>(false);
  const [cardKindDivision, setCardKindDivision] = useState<boolean>(false);
  const [hintRevealed, reveal] = useState<boolean>(false);
  return (
    <Container className="App">
      <Row>
      <DisplayCard card={activeCard} hintRevealed={false}></DisplayCard>
      <ControlPanel setCard={setActiveCard} hintRevealed={hintRevealed} reveal={function (r: boolean): void {
          throw new Error('Function not implemented.');
        } }></ControlPanel>
      </Row>
      </Container> 
  );
}

export default App;
