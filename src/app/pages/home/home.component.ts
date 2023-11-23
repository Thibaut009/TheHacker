import { Component, HostListener } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { QuizzPopupComponent } from 'src/app/components/popup/quizz-popup/quizz-popup.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  isMobile: boolean = window.innerWidth <= 768; // Mettez la largeur que vous considérez comme mobile
  responseMessage: string | null = null;
  
  constructor(public dialog: MatDialog) {}

  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    this.isMobile = event.target.innerWidth <= 768;
  }

  openDialog(): void {
    this.responseMessage = null;
  
    const dialogRef = this.dialog.open(QuizzPopupComponent);
  
    dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined) {
        if (result == true) {
          this.responseMessage = 'Bonne réponse !';
        } else {
          this.responseMessage = 'Mauvaise réponse.';
        }
      } else {
        this.responseMessage = "Vous n'avez pas répondu à la question.";
      }
    });
  }
  
}
