export interface Answer {
  text: string;
  isCorrect: boolean;
}

export interface Question {
  text: string;
  difficulty: string; // Ajout de la propriété difficulty
  answers: Answer[];
}
