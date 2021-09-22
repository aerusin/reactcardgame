export enum CardKind {
    addition = "Addition Problems",
    subtraction = "Subtraction Problems"
}

export interface Card {
    ID: number
    kind: CardKind
    mathProblem: number
    correctAnswer: number
}