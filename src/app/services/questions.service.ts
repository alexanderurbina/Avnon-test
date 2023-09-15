import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Question } from '../shared/interfaces/question.interface';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {
  private questionsSubject = new BehaviorSubject<Question[]>([]);
  questions$ = this.questionsSubject.asObservable();

  constructor() { }

  addQuestion(question: Question) {
    const currentQuestions = this.questionsSubject.value;
    currentQuestions.push(question);
    this.questionsSubject.next(currentQuestions);
  }
}
