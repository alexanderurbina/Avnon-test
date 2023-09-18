import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AddQuestionComponent } from './../../components/add-question/add-question.component';
import { QuestionsService } from './../../services/questions.service';
import { Question, createdQuestion } from './../../shared/interfaces/question.interface';
import { Router } from '@angular/router';
import { AbstractControl, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  public formItems: Array<createdQuestion> = [];
  public inputForm: FormGroup;
  constructor(
    private dialog: MatDialog,
    private questionsService: QuestionsService,
    private router: Router,
    private fb: FormBuilder,
  ) { 
    this.inputForm = this.fb.group({
      inputArray: this.fb.array([]),
    });
  }

  ngOnInit(): void {
    this.questionsService.questions$.subscribe( data => {
      this.inputArray.clear();
      this.formItems = [];
      console.log(data)
      data.forEach(element => {
        const control = this.createInputControl(element)
        let item: createdQuestion = {
          question: element,
          control: control
        }
        this.formItems.push(item);
        this.inputArray.push(control); 
        console.log(this.inputArray)
        console.log(this.formItems)
      });

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
    let answersToDisplay: Array<Question> = [];
    answersToDisplay = this.formItems.map((item) => {
      item.question.answer = item.control.value;
      return item.question;
    })
    this.questionsService.saveAsnwer(answersToDisplay)
    console.log(this.formItems)
    this.router.navigate(['form/answers']);
  }

  get inputArray(): FormArray {
    return this.inputForm.get('inputArray') as FormArray;
  }

  private createInputControl(element: Question): AbstractControl {
    if(element.required) {
      return this.fb.control('', [Validators.required]);
    } else {
      return this.fb.control('');
    }
  }

  public checkboxChanges(index: number): void {
    console.log(this.formItems);
    if(this.formItems[index].question.answerOptions.some(option => option.isSelected === true)) {
      const selectedValues = this.formItems[index].question.answerOptions
      .filter(option => option.isSelected === true)
      .map(option => option.value);
      selectedValues.join(', ');
      this.inputArray.controls[index].setValue(selectedValues); 
    } else {
      this.inputArray.controls[index].setValue(''); 
    }
    console.log(this.inputForm.controls)
  }
  
}
