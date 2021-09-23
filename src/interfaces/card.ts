

export enum CardKind {
    Addition = "Addition Problems",
    Subtraction = "Subtraction Problems",
    Multiplication = "Multiplication Problems",
    Division = "Division Problems"
}

export interface Card {
    ID: number;
    kind: CardKind;
    question: string;
    answer: string;
}
