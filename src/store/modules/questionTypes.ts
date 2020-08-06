import { Question } from '../types';

export interface QuestionState{
    questionUrl: string; // 'https://opentdb.com/api.php',
    questions: Array<Question>;
}

