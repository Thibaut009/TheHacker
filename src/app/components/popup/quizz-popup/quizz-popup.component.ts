import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Answer, Question } from 'src/models/quizz.model';

@Component({
  selector: 'app-quizz-popup',
  templateUrl: './quizz-popup.component.html',
  styleUrls: ['./quizz-popup.component.css']
})
export class QuizzPopupComponent {
  questions: Question[] = [
    { 
      text: "Qu'est-ce que HTML signifie ?", 
      answers: [
        { text: 'HyperText Markup Language', isCorrect: true },
        { text: 'HighText Machine Language', isCorrect: false }
      ]
    },
    { 
      text: "Quelle balise est utilisée pour créer une liste ordonnée en HTML ?", 
      answers: [
        { text: '<ul>', isCorrect: false },
        { text: '<ol>', isCorrect: true }
      ]
    },
    { 
      text: "Dans CSS, que signifie l'acronyme 'CSS' ?", 
      answers: [
        { text: 'Counter Strike: Source', isCorrect: false },
        { text: 'Cascading Style Sheets', isCorrect: true }
      ]
    },
    { 
      text: "Quel sélecteur CSS est utilisé pour sélectionner tous les éléments ?", 
      answers: [
        { text: '*', isCorrect: true },
        { text: '#', isCorrect: false }
      ]
    },
    { 
      text: "Quel attribut HTML est utilisé pour définir le texte alternatif d'une image ?", 
      answers: [
        { text: 'alt', isCorrect: true },
        { text: 'src', isCorrect: false }
      ]
    },
    { 
      text: "En CSS, quel attribut est utilisé pour définir la couleur du texte ?", 
      answers: [
        { text: 'color', isCorrect: true },
        { text: 'font-size', isCorrect: false }
      ]
    },
    { 
      text: "Quelle balise HTML est utilisée pour créer un lien hypertexte ?", 
      answers: [
        { text: '<a>', isCorrect: true },
        { text: '<p>', isCorrect: false }
      ]
    },
    { 
      text: "Quel sélecteur CSS est utilisé pour sélectionner un élément avec une classe spécifique ?", 
      answers: [
        { text: '.ma-classe', isCorrect: true },
        { text: '#mon-id', isCorrect: false }
      ]
    },
    { 
      text: "Quel attribut HTML est utilisé pour définir un titre à une page web ?", 
      answers: [
        { text: 'title', isCorrect: true },
        { text: 'head', isCorrect: false }
      ]
    },
    { 
      text: "En CSS, quelle propriété est utilisée pour définir la taille de la police ?", 
      answers: [
        { text: 'font-size', isCorrect: true },
        { text: 'text-align', isCorrect: false }
      ]
    },
    { 
      text: "Quel élément HTML est utilisé pour créer un paragraphe ?", 
      answers: [
        { text: '<p>', isCorrect: true },
        { text: '<span>', isCorrect: false }
      ]
    },
    { 
      text: "Quelle propriété CSS est utilisée pour définir la couleur d'arrière-plan ?", 
      answers: [
        { text: 'background-color', isCorrect: true },
        { text: 'color', isCorrect: false }
      ]
    },
    { 
      text: "Quelle balise HTML est utilisée pour créer une liste non ordonnée ?", 
      answers: [
        { text: '<ul>', isCorrect: true },
        { text: '<ol>', isCorrect: false }
      ]
    },
    { 
      text: "Quel sélecteur CSS est utilisé pour sélectionner un élément avec un ID spécifique ?", 
      answers: [
        { text: '#mon-id', isCorrect: true },
        { text: '.ma-classe', isCorrect: false }
      ]
    },
    { 
      text: "Quelle est la dernière version de HTML ?", 
      answers: [
        { text: 'HTML5', isCorrect: true },
        { text: 'XHTML', isCorrect: false }
      ]
    },
    { 
      text: "Quel attribut HTML est utilisé pour définir du texte en italique ?", 
      answers: [
        { text: 'class', isCorrect: false },
        { text: 'style', isCorrect: true }
      ]
    },
    { 
      text: "En CSS, quelle propriété est utilisée pour centrer un élément horizontalement ?", 
      answers: [
        { text: 'text-align', isCorrect: true },
        { text: 'margin', isCorrect: false }
      ]
    },
    { 
      text: "Quelle balise HTML est utilisée pour créer un lien vers un fichier externe ?", 
      answers: [
        { text: '<link>', isCorrect: true },
        { text: '<a>', isCorrect: false }
      ]
    },
    { 
      text: "Quel sélecteur CSS est utilisé pour sélectionner tous les éléments enfants d'un élément spécifique ?", 
      answers: [
        { text: '>', isCorrect: false },
        { text: '*', isCorrect: true }
      ]
    },
    // Ajoutez autant de questions que nécessaire
  ];

  selectedQuestion: Question | null = null;

  constructor(public dialogRef: MatDialogRef<QuizzPopupComponent>) {
    this.selectRandomQuestion();
  }

  selectRandomQuestion(): void {
    const randomIndex = Math.floor(Math.random() * this.questions.length);
    this.selectedQuestion = this.questions[randomIndex];
  }

  selectAnswer(selectedAnswer: Answer): void {
    if (this.selectedQuestion) {
      const result = selectedAnswer.isCorrect;
      this.dialogRef.close(result);
    } else {
      this.dialogRef.close(null);
    }
  }
}
