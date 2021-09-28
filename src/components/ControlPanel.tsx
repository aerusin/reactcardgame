import { Button, Col } from 'react-bootstrap';
import { Card } from '../interfaces/card';
import CARDS from '../assets/cards.json'
import { getRandomElement } from '../utilities/data';

export function ControlPanel({setCard, reveal, hintRevealed}: {setCard: (c: Card)=>void, 
        reveal: (r: boolean)=>void, hintRevealed: boolean}): JSX.Element {
    
    function setRandomCard() {
        setCard(getRandomElement((CARDS as Card[]).filter((card: Card) => card.kind === "Addition Problems")))
    }

    function makeShouter(name: string) {
        return function() {
            console.log(name);
        }
    }
    
    console.log(makeShouter)
    console.log(makeShouter("Dr. Bart"));
    let newFunction = makeShouter("Dr. Bart");
    newFunction()
    console.log(makeShouter("Dr. Bart")());


    return <Col>
    <Button onClick={setRandomCard}>Enter</Button>
    <Button onClick={() => reveal(!hintRevealed)}> Hint</Button>


    </Col>
}

