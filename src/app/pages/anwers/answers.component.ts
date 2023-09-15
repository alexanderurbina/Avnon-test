import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionsService } from './../../services/questions.service';
@Component({
  selector: 'app-answers',
  templateUrl: './answers.component.html',
  styleUrls: ['./answers.component.scss']
})
export class AnswersComponent implements OnInit {
  public answersToDisplay: Array<any> = [] 
  constructor( 
    private router: Router, 
    private questionsService:QuestionsService) { }

  ngOnInit(): void {
    this.questionsService.questions$.subscribe( data => {
      this.answersToDisplay = data;
    } )
  }

  public backToForm():void {
    this.router.navigate(['form/builder']);
  }
}
