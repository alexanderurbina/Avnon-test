import { Component, OnInit } from '@angular/core';
import { Question } from './../../shared/interfaces/question.interface';
import { AbstractControl, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { QuestionsService } from './../../services/questions.service';
@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.scss']
})
export class AddQuestionComponent implements OnInit {
  public selectedOption: string = 'paragraph';
  public questionName: string = '';
  public questionsData: Array<Question> = [];
  public inputForm: FormGroup;
  public maxInputs: number = 5;
  public minInputs: number = 1;
  public allowOnwAnswer: boolean = false;
  public requiredQuestion: boolean = false;

  constructor(
    private fb: FormBuilder,
    private questionsService:QuestionsService
    ) {
    this.inputForm = this.fb.group({
      inputArray: this.fb.array([this.createInputControl()]),
    });
  }

  ngOnInit(): void {
  }

  private createInputControl(): AbstractControl {
    return this.fb.control('', [Validators.required]);
  }

  get inputArray(): FormArray {
    return this.inputForm.get('inputArray') as FormArray;
  }

  public addInput(): void {
    this.inputArray.push(this.fb.control('', [Validators.required]));
  }

  public removeInput(index: number): void {
    this.inputArray.removeAt(index);
  }

  public isAddButtonDisabled(): boolean {
    return this.inputArray.length >= this.maxInputs;
  }

  public publicisRemoveButtonDisabled(): boolean {
    return this.inputArray.length <= this.minInputs;
  }

  public saveQuestion(): void {
    const questionType = this.selectedOption;
    const questionName = this.questionName;
    const answerOptions = this.inputArray.value.filter((option: string) => option.trim() !== '');
    const allowOwnAnswer = this.allowOnwAnswer;
    const required = this.requiredQuestion;
    const answer = '';

    const newQuestion: Question = {
      questionType,
      questionName,
      answerOptions,
      allowOwnAnswer,
      required,
      answer
    };

    this.questionsData.push(newQuestion);
    console.log(this.questionsData)
    this.questionsService.addQuestion(newQuestion);
    this.resetForm();
  }

  public resetForm(): void {
    this.selectedOption = 'paragraph';
    this.questionName = '';
    this.inputArray.clear();
    this.inputArray.push(this.createInputControl());
    this.allowOnwAnswer = false;
    this.requiredQuestion = false;
  }

}
