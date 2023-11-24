export interface Answer {
  text: string;
  isCorrect: boolean;
}

export interface Question {
  text: string;
  difficulty: string;
  answers: Answer[];
}
