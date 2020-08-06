import { Module, GetterTree, MutationTree, ActionTree } from "vuex";

import { RootState } from "../types";
import { HeaderState } from './headerTypes';

export const HeaderModule: Module<HeaderState, RootState> = {
    namespaced: true as boolean,
    state: {
        correctAnswers: 0,
        answeredQuestions: 0,
        index: 0,
    } as HeaderState,
    getters: {
        getCorrectAnswers: function(state: HeaderState){
            return state.correctAnswers;
        },
        getAnsweredQuestions: function(state: HeaderState){
            return state.answeredQuestions;
        },
        getCurrentIndex: function(state: HeaderState){
            return state.index;
        }
    } as GetterTree<HeaderState, RootState>,
    mutations: {
        addCorrectAnswer: function(state: HeaderState){
            state.correctAnswers++;
        },
        addTotalAnswer: function(state: HeaderState){
            state.answeredQuestions++;
        },
        addCurrentIndex: function(state: HeaderState){
            state.index++;
        }
    } as MutationTree<HeaderState>,
    actions: {
        answeredQuestion: function(store, isCorrect: boolean){
            if(isCorrect)
                store.commit('addCorrectAnswer');
            store.commit('addTotalAnswer');
        },
        nextQuestion: function(store){
            const maxQuestions = store.rootGetters['OptionsModule/getTotalQuestions'];
            if(store.state.index + 1 < maxQuestions){
                store.commit('addCurrentIndex');
            }
        }
    } as ActionTree<HeaderState, RootState>
};