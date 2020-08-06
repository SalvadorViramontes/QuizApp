import { Module, GetterTree, MutationTree } from "vuex";

import { RootState, Question } from "../types";
import { QuestionState } from './questionTypes';
import { UserOptions } from './optionTypes';

export const QuestionModule: Module<QuestionState, RootState> = {
    namespaced: true as boolean,
    state: {
        questionUrl: 'https://opentdb.com/api.php',
        imageUrl: '',
        questions: []
    } as QuestionState,
    getters: {
        getQuestions: function(state: QuestionState){
            return state.questions;
        },
        getCurrentQuestion: function(state: QuestionState, index: number){
            return state.questions[index];
        }
    } as GetterTree<QuestionState, RootState>,
    mutations: {
        setQuestions: function(state: QuestionState, receivedQuestions: Question[]) {
            state.questions = receivedQuestions;
        }
    } as MutationTree<QuestionState>,
    actions: {
        pollQuestions: function(store){
            let myUrl: string = store.state.questionUrl;
            const userOptions: UserOptions = store.getters['OptionsModule/getSelectedOptions'];
            myUrl += '?amount=' + userOptions.number;
            myUrl += '&category=' + userOptions.category;
            myUrl += '&difficulty=' + userOptions.difficulty;
            myUrl += '&type=' + userOptions.difficulty;
            fetch(myUrl, {
                method: 'get'
            }).then((response => {
                return response.json();
            })).then((jsonData => {
                store.commit('getQuestions', jsonData.results);
            }))
        }
    }
};