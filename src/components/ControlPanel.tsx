import { Button, Col } from 'react-bootstrap';
import { Card, CardKind } from '../interfaces/card';
import CARDS from '../assets/cards.json'
import { getRandomElement } from '../utilities/data';
import { CardKindSelector } from './CardKindSelector';

export function ControlPanel({setCard, cardKind, setCardKind}: {setCard: (c: Card)=>void, cardKind: CardKind, setCardKind: (c: CardKind)=>void}): JSX.Element {
    
    function setRandomCard() {
        setCard(getRandomElement(CARDS as Card[]))
    }
    return <Col>
    <Button onClick={setRandomCard}>Random</Button>
    <CardKindSelector cardKind = {cardKind} setCardKind = {setCardKind}></CardKindSelector>
    </Col>
}   

