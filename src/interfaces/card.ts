export enum CardKind {
    Addition = "Addition Problems",
    Subtraction = "Subtraction Problems",
    Multiplication = "Multiplication Problems",
    Division = "Division Problems"
}

export interface Card {
    ID: number;
    Kind: CardKind;
    MathProblem: string;
    CorrectAnswer: string;
}