import { Col, Card as BootstrapCard, InputGroup, FormControl, Form, Button } from 'react-bootstrap';
import { Card, CardKind} from '../interfaces/card'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react';
import { isConstructorDeclaration, isGetAccessor } from 'typescript';
import { getRandomElement } from '../utilities/data';
import CARDS from '../assets/cards.json'
import { clear } from 'console';



export function DisplayCard({card, setCard, cardKind}: {card: Card, setCard: (c: Card)=>void, cardKind: CardKind}): JSX.Element {
    const [searchText, setSearchText] = useState("")
    function handleKeyPress(event: React.KeyboardEvent) {
        console.log(card.kind)
        console.log(cardKind)
        console.log((event.target as HTMLInputElement).value);
        let studentAnswer = (event.target as HTMLInputElement).value;
        if(event.key === 'Enter'){
            if(studentAnswer === card.hint){
                alert("Correct!");
                setCard(getRandomElement((CARDS as Card[]).filter((card: Card) => card.kind === cardKind)))
                setSearchText("");
            }else{
                alert("Incorrect, Try Again!")
                setSearchText("")
            }
        }
    }
    return <Col>
    <BootstrapCard color = "primary">
        <BootstrapCard.Body>
            <BootstrapCard.Text>
                <strong>Math Problem</strong>:
                <div> {card.question}
                </div> 
            <Form.Group controlId="answer-entry">
            <Form.Label><strong>Enter Correct Answer:</strong></Form.Label>
            <Form.Control as="input" value = {searchText} onKeyPress = {handleKeyPress}
                onChange = {(e) => setSearchText(e.target.value)}/>
            </Form.Group>
            </BootstrapCard.Text>
        </BootstrapCard.Body>
    </BootstrapCard>
    </Col>
}