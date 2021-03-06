import { Module, GetterTree, MutationTree, ActionTree } from "vuex";

import { RootState, Question } from "../types";
import { QuizState } from './quizTypes';
import { UserOptions } from './optionTypes';

export const QuizModule: Module<QuizState, RootState> = {
    namespaced: true as boolean,
    state: {
        questionUrl: 'https://opentdb.com/api.php',
        questions: [],
        finished: false
    } as QuizState,
    getters: {
        getQuestions: function(state: QuizState){
            return state.questions;
        },
        getQuizStatus: function(state){
            return !state.finished;
        }
    } as GetterTree<QuizState, RootState>,
    mutations: {
        setQuestions: function(state: QuizState, receivedQuestions: Question[]) {
            state.questions = receivedQuestions;
        },
        endQuiz: function(state: QuizState){
            state.finished = true;
        },
        restartQuiz: function(state: QuizState){
            state.finished = false;
        }
    } as MutationTree<QuizState>,
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
    } as ActionTree<QuizState, RootState>
};