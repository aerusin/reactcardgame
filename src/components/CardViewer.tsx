import { Col, Card as BootstrapCard } from 'react-bootstrap';
import { Card } from '../interfaces/card';


export function CardViewer({card}: {card: Card}): JSX.Element {
    return <Col>
    <BootstrapCard>
        <BootstrapCard.Body>
            <BootstrapCard.Title>
                Question: {card.question}
                Answer: {card.answer}
            </BootstrapCard.Title>
        </BootstrapCard.Body>
    </BootstrapCard>
    <h1>Card Viewer</h1>
    <div>Question: {card.question}</div>
    <div>Answer</div>
    </Col>
}