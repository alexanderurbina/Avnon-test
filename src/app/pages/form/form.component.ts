import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AddQuestionComponent } from './../../components/add-question/add-question.component';
import { QuestionsService } from './../../services/questions.service';
import { Question } from './../../shared/interfaces/question.interface';
import { Router } from '@angular/router';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  public formData: Array<Question> = [];

  constructor
  (
    private dialog: MatDialog,
    private questionsService: QuestionsService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.questionsService.questions$.subscribe( data => {
      this.formData = data;
    } )
  }

  public openDialog(): void {
    const dialogRef = this.dialog.open(AddQuestionComponent, {
      width: '350px',
      data: {},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  public toAnswers(): void {
    this.router.navigate(['form/answers']);
  }

}
