export interface Question {
  questionType: string;
  questionName: string;
  answerOptions: checkBoxItem[];
  allowOwnAnswer: boolean;
  required: boolean;
  answer: any;
  otherAnswer: any;
  isOtherSelected: boolean;
}

export interface createdQuestion {
  question: Question,
  control: any
}

export interface checkBoxItem {
  isSelected: boolean,
  value: string
}