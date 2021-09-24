import { Button, Col } from 'react-bootstrap';
import { Card } from '../interfaces/card';
import CARDS from '../assets/cards.json'
import { getRandomElement } from '../utilities/data';

export function ControlPanel({setCard, reveal, hintRevealed}: {setCard: (c: Card)=>void, reveal: (r: boolean)=>void, hintRevealed: boolean}): JSX.Element {
    function setRandomCard() {
        setCard(getRandomElement(CARDS as Card[]))
    }
    return <Col>
    <Button onClick={setRandomCard}>Enter</Button>
    <Button onClick={() => reveal(!hintRevealed)}> int</Button>
    </Col>
}

