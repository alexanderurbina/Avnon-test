export interface Question {
  questionType: string;
  questionName: string;
  answerOptions?: string[];
  allowOwnAnswer: boolean;
  required: boolean;
  answer: any;
}