import { Question } from '../types';

export interface QuizState{
    finished: boolean;
    questionUrl: string; // 'https://opentdb.com/api.php',
    questions: Array<Question>;
}