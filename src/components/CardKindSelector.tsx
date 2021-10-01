import { useState } from 'react';
import { Button, ButtonGroup, Col, ToggleButton } from 'react-bootstrap';
import { CardKind } from '../interfaces/card';

export function CardKindSelector({cardKind, setCardKind}: {cardKind: CardKind, setCardKind: (c: CardKind)=>void}): JSX.Element {
  const [checked, setChecked] = useState(false);
  const [radioValue, setRadioValue] = useState('1');
  const radios = [
      { name: '+', value: CardKind.Addition },
      { name: '-', value: CardKind.Subtraction },
      { name: 'x', value: CardKind.Multiplication },
      { name: '÷', value: CardKind.Division }
    ];
    return (
    <ButtonGroup>
        {radios.map((radio, idx) => (
         <ToggleButton
          key={idx}
          id={`radio-${idx}`}
          type="radio"
          variant="secondary"
          name="radio"
          value={radio.value}
          checked={cardKind === radio.value}
          onChange={(e) => setCardKind((e.currentTarget.value) as CardKind)}
          >
          {radio.name}
        </ToggleButton>
      ))}
    </ButtonGroup>)
    console.log(cardKind)
}