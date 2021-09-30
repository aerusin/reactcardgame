import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CARDS from './assets/cards.json'
import { DisplayCard } from './components/DisplayCard';
import { ControlPanel } from './components/ControlPanel'
//import { Timer } from './components/Timer'
import { Container, Row } from 'react-bootstrap'
import { Card } from './interfaces/card';
function App(): JSX.Element {
  const [activeCard, setActiveCard] = useState<Card>(CARDS[0] as Card);
  const [cardKind, setCardKind] = useState<string>("addition");
  const [answer, setAnswer] =useState<string>("");
  const [expected, setExpected] =useState<string>("");
  const [counter, setCounter] =React.useState(60);  
  

  return (
    <Container className="App">
      <Row>
      <DisplayCard card={activeCard} setCard={setActiveCard}></DisplayCard>
      </Row>
      <Row>
      <ControlPanel setCard={setActiveCard} ></ControlPanel> 
      </Row>
      </Container>  
  );
}

export default App;
