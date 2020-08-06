import { Question } from '../types';

export interface QuizState{
    questionUrl: string; // 'https://opentdb.com/api.php',
    questions: Array<Question>;
}
