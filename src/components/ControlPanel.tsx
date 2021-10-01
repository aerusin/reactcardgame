import { Button, Col } from 'react-bootstrap';
import { Card, CardKind } from '../interfaces/card';
import CARDS from '../assets/cards.json'
import { getRandomElement } from '../utilities/data';
import { CardKindSelector } from './CardKindSelector';

export function ControlPanel({setCard, cardKind, setCardKind}: {setCard: (c: Card)=>void, cardKind: CardKind, setCardKind: (c: CardKind)=>void}): JSX.Element {
    
    function setRandomCard() {
        setCard(getRandomElement(CARDS as Card[]))
    }
    function cardChange() {
        setCard(getRandomElement((CARDS as Card[]).filter((card: Card) => card.kind === cardKind)))
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
    console.log(cardKind)
    //setCard(getRandomElement((CARDS as Card[]).filter((card: Card) => card.kind === cardKind)))
    return <Col>
    <Button onClick={setRandomCard}>Random</Button>
    <CardKindSelector cardKind = {cardKind} setCardKind = {setCardKind}></CardKindSelector>
    </Col>
    
}

