import { Module, GetterTree, MutationTree, ActionTree } from "vuex";

import { RootState, Question } from "../types";
import { QuestionState } from './questionTypes';
import { UserOptions } from './optionTypes';

export const QuestionModule: Module<QuestionState, RootState> = {
    namespaced: true as boolean,
    state: {
        questionUrl: 'https://opentdb.com/api.php',
        questions: []
    } as QuestionState,
    getters: {
        getQuestions: function(state: QuestionState){
            return state.questions;
        },
        getCurrentQuestion: function(state: QuestionState, _getters, _rootState: RootState, rootGetters){
            const currentIndex = rootGetters['HeaderModule/getCurrentIndex'];
            return state.questions[currentIndex];
        },
        ready: function(state: QuestionState){
            return state.questions.length > 0;
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
            const userOptions: UserOptions = store.rootGetters['OptionsModule/getSelectedOptions'];

            const selectedAmount: string = '?amount=' + String(userOptions.number);
            const selectedCategory: string = (userOptions.category !== null) ? '&category=' + String(userOptions.category) : '';
            const selectedDifficulty: string = (userOptions.difficulty !== null) ? '&difficulty=' + userOptions.difficulty : '';
            const selectedType: string = (userOptions.type !== null) ? '&type=' + userOptions.type : '';

            myUrl += selectedAmount + selectedCategory + selectedDifficulty + selectedType;

            fetch(myUrl, {
                method: 'get'
            }).then((response => {
                return response.json();
            })).then((jsonData => {
                store.commit('setQuestions', jsonData.results);
            }))
        }
    } as ActionTree<QuestionState, RootState>
};