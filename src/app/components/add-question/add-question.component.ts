import { Component, OnInit } from '@angular/core';
import { question } from './../../shared/interfaces/question.interface';
import { AbstractControl, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.scss']
})
export class AddQuestionComponent implements OnInit {
  public selectedOption: string = 'paragraph';
  public questionName: string = '';
  public questionsData: Array<question> = [];
  public inputForm: FormGroup;
  public maxInputs: number = 5;
  public minInputs: number = 1;
  public allowOnwAnswer: boolean = false;
  public requiredQuestion: boolean = false;

  constructor(private fb: FormBuilder) {
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

}
