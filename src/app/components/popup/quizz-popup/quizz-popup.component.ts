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
      text: "What does HTML stand for?",
      answers: [
        { text: 'HyperText Markup Language', isCorrect: true },
        { text: 'HighText Machine Language', isCorrect: false }
      ]
    },
    {
      text: "Which tag is used to create an ordered list in HTML?",
      answers: [
        { text: '<ul>', isCorrect: false },
        { text: '<ol>', isCorrect: true }
      ]
    },
    {
      text: "In CSS, what does the acronym 'CSS' stand for?",
      answers: [
        { text: 'Counter Strike: Source', isCorrect: false },
        { text: 'Cascading Style Sheets', isCorrect: true }
      ]
    },
    {
      text: "Which CSS selector is used to select all elements?",
      answers: [
        { text: '#', isCorrect: false },
        { text: '*', isCorrect: true }
      ]
    },
    {
      text: "Which HTML attribute is used to define the alternative text for an image?",
      answers: [
        { text: 'alt', isCorrect: true },
        { text: 'src', isCorrect: false }
      ]
    },
    {
      text: "In CSS, which attribute is used to define the text color?",
      answers: [
        { text: 'font-size', isCorrect: false },
        { text: 'color', isCorrect: true }
      ]
    },
    {
      text: "Which HTML tag is used to create a hyperlink?",
      answers: [
        { text: '<p>', isCorrect: false },
        { text: '<a>', isCorrect: true }
      ]
    },
    {
      text: "Which CSS selector is used to select an element with a specific class?",
      answers: [
        { text: '.ma-class', isCorrect: true },
        { text: '#mon-id', isCorrect: false }
      ]
    },
    {
      text: "Which HTML attribute is used to define a title for a web page?",
      answers: [
        { text: 'title', isCorrect: true },
        { text: 'head', isCorrect: false }
      ]
    },
    {
      text: "In CSS, which property is used to define the font size?",
      answers: [
        { text: 'text-align', isCorrect: false },
        { text: 'font-size', isCorrect: true }
      ]
    },
    {
      text: "Which HTML element is used to create a paragraph?",
      answers: [
        { text: '<p>', isCorrect: true },
        { text: '<span>', isCorrect: false }
      ]
    },
    {
      text: "Which CSS property is used to define the background color?",
      answers: [
        { text: 'background-color', isCorrect: true },
        { text: 'color', isCorrect: false }
      ]
    },
    {
      text: "Which HTML tag is used to create an unordered list?",
      answers: [
        { text: '<ul>', isCorrect: true },
        { text: '<ol>', isCorrect: false }
      ]
    },
    {
      text: "Which CSS selector is used to select an element with a specific ID?",
      answers: [
        { text: '#mon-id', isCorrect: true },
        { text: '.ma-classe', isCorrect: false }
      ]
    },
    {
      text: "What is the latest version of HTML?",
      answers: [
        { text: 'XHTML', isCorrect: false },
        { text: 'HTML5', isCorrect: true }
      ]
    },
    {
      text: "Which HTML attribute is used to define text in italics?",
      answers: [
        { text: 'class', isCorrect: false },
        { text: 'style', isCorrect: true }
      ]
    },
    {
      text: "In CSS, which property is used to center an element horizontally?",
      answers: [
        { text: 'text-align', isCorrect: true },
        { text: 'margin', isCorrect: false }
      ]
    },
    {
      text: "Which HTML tag is used to create a link to an external file?",
      answers: [
        { text: '<link>', isCorrect: true },
        { text: '<a>', isCorrect: false }
      ]
    },
    {
      text: "Which CSS selector is used to select all child elements of a specific element?",
      answers: [
        { text: '>', isCorrect: false },
        { text: '*', isCorrect: true }
      ]
    },
    // Add as many questions as needed
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
