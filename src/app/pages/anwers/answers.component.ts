import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-answers',
  templateUrl: './answers.component.html',
  styleUrls: ['./answers.component.scss']
})
export class AnswersComponent implements OnInit {

  constructor( private router: Router) { }

  ngOnInit(): void {
  }

  public backToForm():void {
    this.router.navigate(['form/builder']);
  }
}
