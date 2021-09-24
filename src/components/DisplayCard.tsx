import { Col, Card as BootstrapCard, InputGroup, FormControl, Form, Button } from 'react-bootstrap';
import { Card } from '../interfaces/card'
import 'bootstrap/dist/css/bootstrap.min.css'


export function DisplayCard({card, hintRevealed}: {card: Card, hintRevealed: boolean}): JSX.Element {
    return <Col>
    <BootstrapCard>
        <BootstrapCard.Body>
            <BootstrapCard.Text>
                <strong>Math Problem</strong>:
                <div> {card.question}
                </div> 
            <Form.Group controlId="answer-entry">
            <Form.Label><strong>Enter Correct Answer:</strong></Form.Label>
            <Form.Control as="textarea" rows={2} />
            {hintRevealed && <BootstrapCard.Text>
                <strong>Hint</strong>: {card.hint}
                </BootstrapCard.Text>}
            </Form.Group>
            </BootstrapCard.Text>
        </BootstrapCard.Body>
    </BootstrapCard>
    </Col>
}