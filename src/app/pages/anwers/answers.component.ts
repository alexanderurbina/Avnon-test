import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionsService } from './../../services/questions.service';
@Component({
  selector: 'app-answers',
  templateUrl: './answers.component.html',
  styleUrls: ['./answers.component.scss']
})
export class AnswersComponent implements OnInit {
  public answersToDisplay: Array<any> = [];
  public answersRef: any; 
  constructor( 
    private router: Router, 
    private questionsService:QuestionsService) { }

  ngOnInit(): void {
   this.answersRef = this.questionsService.answer$.subscribe( data => {
      console.log(data)
      this.answersToDisplay = data;
    } )
  }

  ngOnDestroy(): void {
    this.questionsService.clearData();
  }

  public backToForm():void {
    this.router.navigate(['form/builder']);
  }
}
