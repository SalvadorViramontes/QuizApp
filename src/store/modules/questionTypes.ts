import { Question } from '../types';

export interface QuestionState{
    questionUrl: string; // 'https://opentdb.com/api.php',
    imageUrl: string; // ''
    questions: Array<Question>;
}

