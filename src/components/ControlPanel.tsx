import { Button, Col } from 'react-bootstrap';
import { Card } from '../interfaces/card';
import CARDS from '../assets/cards.json'
import { getRandomElement } from '../utilities/data';

export function ControlPanel({setCard}: {setCard: (c: Card)=>void}): JSX.Element {
    
    function setRandomCard() {
        setCard(getRandomElement(CARDS as Card[]))
    }
    function setCardAdd(){
        setCard(getRandomElement((CARDS as Card[]).filter((card: Card) => card.kind === "Addition Problems")))
    }
    function setCardSub(){
        setCard(getRandomElement((CARDS as Card[]).filter((card: Card) => card.kind === "Subtraction Problems")))
    }
    function setCardMul(){
        setCard(getRandomElement((CARDS as Card[]).filter((card: Card) => card.kind === "Multiplication Problems")))
    }
    function setCardDiv(){
        setCard(getRandomElement((CARDS as Card[]).filter((card: Card) => card.kind === "Division Problems")))
    }
    return <Col>
    <Button onClick={setRandomCard}>Random</Button>
    <Button onClick={setCardAdd}>+</Button>
    <Button onClick={setCardSub}>-</Button>
    <Button onClick={setCardMul}>*</Button>
    <Button onClick={setCardDiv}>÷</Button>
    </Col>
    
}

