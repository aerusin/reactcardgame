import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CARDS from './assets/cards.json'
import { DisplayCard } from './components/DisplayCard';
import { ControlPanel } from './components/ControlPanel'
//import { Timer } from './components/Timer'
import { Container, Row } from 'react-bootstrap'
import { Card, CardKind } from './interfaces/card';
function App(): JSX.Element {
  const [activeCard, setActiveCard] = useState<Card>(CARDS[0] as Card);
  const [cardKind, setCardKind] = useState<CardKind>(CardKind.Addition);
  const [answer, setAnswer] =useState<string>("");
  const [expected, setExpected] =useState<string>("");
  //const [counter, setCounter] =React.useState(60); 
 
 // React.useEffect(() => {
   // counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
 // }, [counter]);
    

  return (
    <Container className="App">
      <Row>
      <DisplayCard card={activeCard} setCard={setActiveCard} cardKind={cardKind}></DisplayCard>
      </Row>
      <Row>
      <ControlPanel setCard={setActiveCard} cardKind={cardKind} setCardKind={setCardKind} ></ControlPanel> 
      </Row>
      </Container>  
  );
}

export default App;
