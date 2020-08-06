import { NullableString, NullableNumber } from '../types';

export interface UserOptions{
    number: NullableNumber;
    category: NullableString;
    difficulty: NullableString;
    type: NullableString;
}

export interface TextValue{
    text: string;
    value: number | string | null;
    icon?: string;
}

export interface OptionState {
    selectedOptions: UserOptions;
    categories: Array<TextValue>;
    difficulties: Array<TextValue>;
    types: Array<TextValue>;
}