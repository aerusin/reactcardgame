import { Col, Card as BootstrapCard, InputGroup, FormControl, Form } from 'react-bootstrap';
import { Card } from '../interfaces/card'


export function CardViewer({card}: {card: Card}): JSX.Element {
    return <Col>
    <div>{card.question}</div>

    </Col>
}