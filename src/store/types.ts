export type NullableNumber = number | null;
export type NullableString = string | null;
export type NullableQuestion = Question | null;

export interface RootState{
    myState: NullableString
}
export interface Question{
    category: string;
    type: string;
    difficulty: string;
    question: string;
    correct_answer: string;
    incorrect_answers: Array<string>;
}