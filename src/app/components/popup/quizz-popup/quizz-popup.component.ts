import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Answer, Question } from 'src/models/quizz.model';

@Component({
  selector: 'app-quizz-popup',
  templateUrl: './quizz-popup.component.html',
  styleUrls: ['./quizz-popup.component.css']
})
export class QuizzPopupComponent {
  difficultyLevels = ['easy', 'medium', 'hard'];

  questions: Question[] = [
    {
      text: "What does HTML stand for?",
      difficulty: 'easy',
      answers: [
        { text: 'HyperText Markup Language', isCorrect: true },
        { text: 'HighText Machine Language', isCorrect: false }
      ]
    },
    {
      text: "Which tag is used to create an ordered list in HTML?",
      difficulty: 'easy',
      answers: [
        { text: '<ul>', isCorrect: false },
        { text: '<ol>', isCorrect: true }
      ]
    },
    {
      text: "In CSS, what does the acronym 'CSS' stand for?",
      difficulty: 'easy',
      answers: [
        { text: 'Counter Strike: Source', isCorrect: false },
        { text: 'Cascading Style Sheets', isCorrect: true }
      ]
    },
    {
      text: "Which CSS selector is used to select all elements?",
      difficulty: 'easy',
      answers: [
        { text: '#', isCorrect: false },
        { text: '*', isCorrect: true }
      ]
    },
    {
      text: "Which HTML attribute is used to define the alternative text for an image?",
      difficulty: 'easy',
      answers: [
        { text: 'alt', isCorrect: true },
        { text: 'src', isCorrect: false }
      ]
    },
    {
      text: "In CSS, which attribute is used to define the text color?",
      difficulty: 'easy',
      answers: [
        { text: 'font-size', isCorrect: false },
        { text: 'color', isCorrect: true }
      ]
    },
    {
      text: "Which HTML tag is used to create a hyperlink?",
      difficulty: 'easy',
      answers: [
        { text: '<p>', isCorrect: false },
        { text: '<a>', isCorrect: true }
      ]
    },
    {
      text: "Which CSS selector is used to select an element with a specific class?",
      difficulty: 'easy',
      answers: [
        { text: '.ma-class', isCorrect: true },
        { text: '#mon-id', isCorrect: false }
      ]
    },
    {
      text: "Which HTML attribute is used to define a title for a web page?",
      difficulty: 'easy',
      answers: [
        { text: 'title', isCorrect: true },
        { text: 'head', isCorrect: false }
      ]
    },
    {
      text: "In CSS, which property is used to define the font size?",
      difficulty: 'easy',
      answers: [
        { text: 'text-align', isCorrect: false },
        { text: 'font-size', isCorrect: true }
      ]
    },
    {
      text: "Which HTML element is used to create a paragraph?",
      difficulty: 'easy',
      answers: [
        { text: '<p>', isCorrect: true },
        { text: '<span>', isCorrect: false }
      ]
    },
    {
      text: "Which CSS property is used to define the background color?",
      difficulty: 'easy',
      answers: [
        { text: 'background-color', isCorrect: true },
        { text: 'color', isCorrect: false }
      ]
    },
    {
      text: "Which HTML tag is used to create an unordered list?",
      difficulty: 'easy',
      answers: [
        { text: '<ul>', isCorrect: true },
        { text: '<ol>', isCorrect: false }
      ]
    },
    {
      text: "Which CSS selector is used to select an element with a specific ID?",
      difficulty: 'easy',
      answers: [
        { text: '#mon-id', isCorrect: true },
        { text: '.ma-classe', isCorrect: false }
      ]
    },
    {
      text: "What is the latest version of HTML?",
      difficulty: 'easy',
      answers: [
        { text: 'XHTML', isCorrect: false },
        { text: 'HTML5', isCorrect: true }
      ]
    },
    {
      text: "Which HTML attribute is used to define text in italics?",
      difficulty: 'easy',
      answers: [
        { text: 'class', isCorrect: false },
        { text: 'style', isCorrect: true }
      ]
    },
    {
      text: "In CSS, which property is used to center an element horizontally?",
      difficulty: 'easy',
      answers: [
        { text: 'text-align', isCorrect: true },
        { text: 'margin', isCorrect: false }
      ]
    },
    {
      text: "Which HTML tag is used to create a link to an external file?",
      difficulty: 'easy',
      answers: [
        { text: '<link>', isCorrect: true },
        { text: '<a>', isCorrect: false }
      ]
    },
    {
      text: "Which CSS selector is used to select all child elements of a specific element?",
      difficulty: 'easy',
      answers: [
        { text: '>', isCorrect: false },
        { text: '*', isCorrect: true }
      ]
    },
    // medium questions
    {
      text: "What is the purpose of the 'defer' attribute in a script tag?",
      difficulty: 'medium',
      answers: [
        { text: 'Delay the execution of the script until the page has finished parsing', isCorrect: true },
        { text: 'Define a deferred function in JavaScript', isCorrect: false }
      ]
    },
    {
      text: "How can you include external JavaScript code in an HTML document?",
      difficulty: 'medium',
      answers: [
        { text: '<script src="script.js"></script>', isCorrect: true },
        { text: '<javascript src="script.js"></javascript>', isCorrect: false }
      ]
    },
    {
      text: "What does the CSS property 'display: none;' do?",
      difficulty: 'medium',
      answers: [
        { text: 'Hides the element from the page', isCorrect: true },
        { text: 'Changes the element to a block-level element', isCorrect: false }
      ]
    },
    {
      text: "What is the purpose of the HTML 'meta' tag?",
      difficulty: 'medium',
      answers: [
        { text: 'Provides metadata about the HTML document', isCorrect: true },
        { text: 'Defines a new meta-element', isCorrect: false }
      ]
    },
    {
      text: "What is the default positioning property in CSS?",
      difficulty: 'medium',
      answers: [
        { text: 'Static', isCorrect: true },
        { text: 'Relative', isCorrect: false }
      ]
    },
    {
      text: "How do you declare a variable in JavaScript?",
      difficulty: 'medium',
      answers: [
        { text: 'var variableName;', isCorrect: true },
        { text: 'variable variableName;', isCorrect: false }
      ]
    },
    {
      text: "What is the purpose of the 'box-sizing' property in CSS?",
      difficulty: 'medium',
      answers: [
        { text: 'Controls how the width and height of an element are calculated', isCorrect: true },
        { text: 'Defines the size of the content box', isCorrect: false }
      ]
    },
    {
      text: "What is the purpose of the HTML 'nav' element?",
      difficulty: 'medium',
      answers: [
        { text: 'Defines a new navigation element', isCorrect: false },
        { text: 'Represents a section of navigation links', isCorrect: true }
      ]
    },
    {
      text: "In JavaScript, what is the purpose of the 'this' keyword?",
      difficulty: 'medium',
      answers: [
        { text: 'Refers to the global object', isCorrect: false },
        { text: 'Refers to the object on which the method is invoked', isCorrect: true }
      ]
    },
    {
      text: "What does the CSS property 'position: absolute;' do?",
      difficulty: 'medium',
      answers: [
        { text: 'Positions an element relative to the viewport', isCorrect: false },
        { text: 'Positions an element relative to its first positioned (not static) ancestor element', isCorrect: true }
      ]
    },
    {
      text: "What does the JavaScript 'map' function do?",
      difficulty: 'medium',
      answers: [
        { text: 'Modifies the original array by applying a function to each element', isCorrect: false },
        { text: 'Creates a new array with the results of calling a provided function on every element in the array', isCorrect: true }
      ]
    },
    {
      text: "How do you center an element horizontally and vertically in CSS?",
      difficulty: 'medium',
      answers: [
        { text: 'Apply the margin: auto; property', isCorrect: false },
        { text: 'Use the combination of flexbox and align-items/justify-content properties', isCorrect: true }
      ]
    },
    {
      text: "What is the purpose of the HTML 'article' element?",
      difficulty: 'medium',
      answers: [
        { text: 'Defines an article in a newspaper or magazine', isCorrect: false },
        { text: 'Represents a self-contained piece of content that could be distributed and reused independently', isCorrect: true }
      ]
    },
    {
      text: "In CSS, what is the difference between 'margin' and 'padding'?",
      difficulty: 'medium',
      answers: [
        { text: 'Margin is the space outside the border of an element, while padding is the space inside the border', isCorrect: true },
        { text: 'Margin is the space inside the border of an element, while padding is the space outside the border', isCorrect: false }
      ]
    },
    {
      text: "What does the JavaScript 'typeof' operator do?",
      difficulty: 'medium',
      answers: [
        { text: 'Checks if a variable is defined', isCorrect: false },
        { text: 'Returns a string indicating the type of the unevaluated operand', isCorrect: true }
      ]
    },
    {
      text: "How do you create a CSS animation?",
      difficulty: 'medium',
      answers: [
        { text: 'Apply the animate property to the element', isCorrect: false },
        { text: 'Use the @keyframes rule to specify the animation behavior over time', isCorrect: true }
      ]
    },
    {
      text: "What is the purpose of the 'aria-label' attribute in HTML?",
      difficulty: 'medium',
      answers: [
        { text: 'Defines a label for a form element', isCorrect: false },
        { text: 'Provides an accessible label for an element when a visible label is not present', isCorrect: true }
      ]
    },
    {
      text: "How do you comment out multiple lines in JavaScript?",
      difficulty: 'medium',
      answers: [
        { text: 'Enclose the comments with /* and */', isCorrect: true },
        { text: 'Use double slashes (//) before each line', isCorrect: false }
      ]
    },
    {
      text: "What is the purpose of the HTML 'figure' element?",
      difficulty: 'medium',
      answers: [
        { text: 'Defines a caption for a <figcaption> element', isCorrect: false },
        { text: 'Represents any content that is referenced from the main content, but that could stand alone and be distributed and reused independently', isCorrect: true }
      ]
    },
    {
      text: "How do you add a border to an element in CSS?",
      difficulty: 'medium',
      answers: [
        { text: 'Use the border property', isCorrect: true },
        { text: 'Apply the outline property', isCorrect: false }
      ]
    },
    // medium questions
    {
      text: "Explain the concept of 'hoisting' in JavaScript.",
      difficulty: 'hard',
      answers: [
        { text: 'Hoisting is a JavaScript behavior where variable and function declarations are moved to the top of their containing scope during the compilation phase.', isCorrect: true },
        { text: 'Hoisting is the process of raising an error when trying to use a variable or function before declaring it.', isCorrect: false }
      ]
    },
    {
      text: "What is the CSS 'box-sizing' property used for?",
      difficulty: 'hard',
      answers: [
        { text: 'The box-sizing property defines how the total width and height of an element are calculated, including padding and border.', isCorrect: true },
        { text: 'The box-sizing property specifies the minimum size of the content box, regardless of padding and border.', isCorrect: false }
      ]
    },
    {
      text: "Explain the 'event delegation' pattern in JavaScript.",
      difficulty: 'hard',
      answers: [
        { text: 'Event delegation is a technique where a single event listener is attached to a common ancestor rather than each individual child element, reducing the number of event listeners.', isCorrect: true },
        { text: 'Event delegation is a way to dispatch events directly to specific child elements based on their event type.', isCorrect: false }
      ]
    },
    {
      text: "What is the purpose of the CSS 'z-index' property?",
      difficulty: 'hard',
      answers: [
        { text: 'The z-index property specifies the stacking order of positioned elements, determining which elements are displayed on top when they overlap.', isCorrect: true },
        { text: 'The z-index property sets the opacity level of an element.', isCorrect: false }
      ]
    },
    {
      text: "Explain the difference between 'localStorage' and 'sessionStorage' in web storage.",
      difficulty: 'hard',
      answers: [
        { text: 'localStorage and sessionStorage are both web storage options, but localStorage persists even when the browser is closed and reopened, while sessionStorage is cleared when the session ends.', isCorrect: true },
        { text: 'localStorage is used for storing data temporarily, and sessionStorage is used for storing data permanently.', isCorrect: false }
      ]
    },
    {
      text: "What is the purpose of the 'apply' method in JavaScript?",
      difficulty: 'hard',
      answers: [
        { text: 'The apply() method calls a function with a given this value, and arguments provided as an array (or an array-like object).', isCorrect: true },
        { text: 'The apply() method is used to apply a specific style to an HTML element.', isCorrect: false }
      ]
    },
    {
      text: "Explain the 'same-origin policy' in the context of web security.",
      difficulty: 'hard',
      answers: [
        { text: 'The same-origin policy is a security measure that restricts web pages from making requests to a different domain than the one that served the web page.', isCorrect: true },
        { text: 'The same-origin policy ensures that all elements on a web page have the same styling.', isCorrect: false }
      ]
    },
    {
      text: "What is the purpose of the HTML 'canvas' element?",
      difficulty: 'hard',
      answers: [
        { text: 'The canvas element provides a way to draw graphics, using JavaScript to manipulate pixels and create animations or interactive features.', isCorrect: true },
        { text: 'The canvas element is used for embedding external content, such as images or videos.', isCorrect: false }
      ]
    },
    {
      text: "Explain the concept of 'closures' in JavaScript.",
      difficulty: 'hard',
      answers: [
        { text: 'Closures are a feature in JavaScript where a function retains access to variables from its outer (enclosing) scope, even after the outer function has finished execution.', isCorrect: true },
        { text: 'Closures are a way to define private methods within a class in JavaScript.', isCorrect: false }
      ]
    },
    {
      text: "What is the purpose of the CSS 'filter' property?",
      difficulty: 'hard',
      answers: [
        { text: 'The filter property applies graphical effects like blur or color adjustment to an element, allowing for creative visual effects.', isCorrect: true },
        { text: 'The filter property is used to filter out specific elements from a selection in CSS.', isCorrect: false }
      ]
    },
    {
      text: "Explain the purpose of the HTML 'data-*' attribute.",
      difficulty: 'hard',
      answers: [
        { text: "The 'data-*' attribute in HTML is used to store custom data private to the page or application.", isCorrect: true },
        { text: "The 'data-*' attribute defines the default value of an input element.", isCorrect: false }
      ]
    },
    {
      text: "What is the CSS 'pseudo-elements' and provide an example.",
      difficulty: 'hard',
      answers: [
        { text: "CSS pseudo-elements are used to select elements based on their state, such as ':hover' or ':active'.", isCorrect: false },
        { text: "CSS pseudo-elements are used to style specific parts of an element, such as the first line or first letter. An example is '::first-line' or '::first-letter'.", isCorrect: true }
      ]
    },
    {
      text: "Explain the 'CSS Grid' layout and its advantages over traditional layout methods.",
      difficulty: 'hard',
      answers: [
        { text: "CSS Grid is a framework for creating responsive navigation menus in CSS.", isCorrect: false },
        { text: "CSS Grid is a two-dimensional layout system for the web that allows you to design complex web layouts more efficiently than traditional methods like Flexbox. It provides a grid-based structure and makes it easier to create responsive designs.", isCorrect: true }
      ]
    },
    {
      text: "What is the purpose of the HTML 'figure' and 'figcaption' elements?",
      difficulty: 'hard',
      answers: [
        { text: "The 'figure' and 'figcaption' elements are used to create links within a document.", isCorrect: false },
        { text: "The 'figure' and 'figcaption' elements in HTML are used to group and provide a caption for any content that is referenced from the main content, such as images, charts, or diagrams.", isCorrect: true }
      ]
    },
    {
      text: "Explain the concept of 'Responsive Web Design' and how it is achieved in CSS.",
      difficulty: 'hard',
      answers: [
        { text: "Responsive Web Design is a technique for creating web pages that are only accessible by specific users.", isCorrect: false },
        { text: "Responsive Web Design is an approach to web design that makes web pages render well on a variety of devices and window or screen sizes. It is achieved in CSS through media queries, flexible grid layouts, and flexible images.", isCorrect: true }
      ]
    },
    {
      text: "What is the CSS 'will-change' property used for?",
      difficulty: 'hard',
      answers: [
        { text: "The 'will-change' property is used to change the visibility of an element in CSS.", isCorrect: false },
        { text: "The 'will-change' property in CSS informs the browser that an element is expected to change, allowing the browser to optimize rendering performance for that element.", isCorrect: true }
      ]
    },
    {
      text: "Explain the purpose of the HTML 'progress' element.",
      difficulty: 'hard',
      answers: [
        { text: "The 'progress' element is used to create a graphical button in HTML.", isCorrect: false },
        { text: "The 'progress' element in HTML is used to represent the completion progress of a task. It is typically used to show the progress of a file upload or a download.", isCorrect: true }
      ]
    },
    {
      text: "What is the CSS 'clip-path' property used for?",
      difficulty: 'hard',
      answers: [
        { text: "The 'clip-path' property is used to add a shadow effect to an element in CSS.", isCorrect: false },
        { text: "The 'clip-path' property in CSS is used to clip an element to a specific shape or region. It allows you to create complex shapes for elements.", isCorrect: true }
      ]
    },
    {
      text: "Explain the CSS 'rem' unit and how it differs from 'em'.",
      difficulty: 'hard',
      answers: [
        { text: "The 'rem' unit is used to define the height of an element, while 'em' is used for width.", isCorrect: false },
        { text: "The 'rem' unit in CSS stands for 'root em' and is relative to the font-size of the root element (usually the <html> element). It is not affected by the font-size of the current element, providing a consistent size across the entire document. In contrast, the 'em' unit is relative to the font-size of the current element.", isCorrect: true }
      ]
    },
    {
      text: "What is the purpose of the HTML 'details' and 'summary' elements?",
      difficulty: 'hard',
      answers: [
        { text: "The 'details' and 'summary' elements are used to create a dropdown menu in HTML.", isCorrect: false },
        { text: "The 'details' and 'summary' elements in HTML are used to create a disclosure widget from which the user can obtain additional information or controls by clicking on the 'summary' element.", isCorrect: true }
      ]
    },
    // Add as many questions as needed
  ];

  // Question sélectionnée
  selectedQuestion: Question | null = null;

  constructor(
    public dialogRef: MatDialogRef<QuizzPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { difficulty: string }
  ) {
    this.selectRandomQuestion(data.difficulty);
  }

  // Sélectionner une question aléatoire en fonction de la difficulté choisie
  selectRandomQuestion(difficulty?: string): void {
    let filteredQuestions = this.questions;

    // Filtrer par difficulté si une difficulté est spécifiée
    if (difficulty && this.difficultyLevels.includes(difficulty)) {
      filteredQuestions = this.questions.filter(question => question.difficulty === difficulty);
    }

    // Sélectionner une question aléatoire parmi les questions filtrées
    const randomIndex = Math.floor(Math.random() * filteredQuestions.length);
    this.selectedQuestion = filteredQuestions[randomIndex];
  }

  // Sélectionner une réponse à la question
  selectAnswer(selectedAnswer: Answer): void {
    if (this.selectedQuestion) {
      const result = selectedAnswer.isCorrect;
      this.dialogRef.close(result);
    } else {
      this.dialogRef.close(null);
    }
  }
}