import { Col, Card as BootstrapCard, InputGroup, FormControl, Form, Button } from 'react-bootstrap';
import { Card } from '../interfaces/card'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react';
import { isConstructorDeclaration, isGetAccessor } from 'typescript';



export function DisplayCard({card, hintRevealed}: {card: Card, hintRevealed: boolean}): JSX.Element {

    let temp = '';
    function handleKeyPress(event: React.ChangeEvent) {
        console.log((event.target as HTMLInputElement).value);
        
        temp = (event.target as HTMLInputElement).value;
        // if(event.key === 'Enter'){
             console.log(card.hint)
             console.log(card.hint === a)
            if(a === card.hint){
                alert("Correct!")

            }else{
                alert("Incorrect, Try Again!")
            }
        // }
    }
    return <Col>
    <BootstrapCard>
        <BootstrapCard.Body>
            <BootstrapCard.Text>
                <strong>Math Problem</strong>:
                <div> {card.question}
                </div> 
            <Form.Group controlId="answer-entry">
            <Form.Label><strong>Enter Correct Answer:</strong></Form.Label>
            <Form.Control as="textarea" rows={2} onChange = {handleKeyPress} />
            {hintRevealed && <BootstrapCard.Text>
                <strong>Hint</strong>: {card.hint}
                </BootstrapCard.Text>}
            </Form.Group>
            </BootstrapCard.Text>
        </BootstrapCard.Body>
    </BootstrapCard>
    </Col>
}