export interface Question {
  questionType: string;
  questionName: string;
  answerOptions?: checkBoxItem[];
  allowOwnAnswer: boolean;
  required: boolean;
  answer: any;
}

export interface checkBoxItem {
  isSelected: boolean,
  value: string
}