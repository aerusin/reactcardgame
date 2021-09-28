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
  const [cardKindAdd, setCardAdd] = useState<boolean>(false);
  const [cardKindSub, setCardSub] = useState<boolean>(false);
  const [cardKindMul, setCardMul] = useState<boolean>(false);
  const [cardKindDiv, setCardDiv] = useState<boolean>(false);
  const [hintRevealed, reveal] = useState<boolean>(false);
  const [answer, setAnswer] =useState<string>("");
  const [expected, setExpected] =useState<string>("");
  

  return (
    <Container className="App">
      <Row>
      <DisplayCard card={activeCard} hintRevealed={false}></DisplayCard>
      <ControlPanel setCard={setActiveCard} reveal={reveal} hintRevealed={false} ></ControlPanel> 
      </Row>
      </Container>  
  );
}

export default App;
