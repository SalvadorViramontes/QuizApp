import { Module, GetterTree, MutationTree, ActionTree } from "vuex";

import { RootState } from "../types";
import { OptionState, UserOptions } from './optionTypes';

export const OptionsModule: Module<OptionState, RootState> = {
    namespaced: true as boolean,
    state: {
        selectedOptions:{
            number: null,
            category: null,
            difficulty: null,
            type: null
        },
        categories:[
            { text: 'Any Category', value: null, icon: 'fas fa-question' },
            { text: 'General Knowledge', value: 9, icon: 'fas fa-glasses' },
            { text: 'Books', value: 10, icon: 'fas fa-book' },
            { text: 'Films', value: 11, icon: 'fas fa-film'},
            { text: 'Music', value: 12, icon: 'fas fa-music' },
            { text: 'Musicals & Theaters', value: 13, icon: 'fas fa-theater-masks' },
            { text: 'Television', value: 14, icon: 'fas fa-tv' },
            { text: 'Video Games', value: 15, icon: 'fas fa-gamepad' },
            { text: 'Board Games', value: 16, icon: 'fas fa-chess-knight' },
            { text: 'Science & Nature', value: 17, icon: 'fas fa-flask' },
            { text: 'Computers', value: 18, icon: 'fas fa-mouse' },
            { text: 'Mathematics', value: 19, icon: 'fas fa-calculator' },
            { text: 'Mythology', value: 20, icon: 'fas fa-landmark' },
            { text: 'Sports', value: 21, icon: 'far fa-futbol' },
            { text: 'Geography', value: 22, icon: 'fas fa-globe-americas' },
            { text: 'History', value: 23, icon: 'fas fa-scroll' },
            { text: 'Politics', value: 24, icon: 'fas fa-balance-scale' },
            { text: 'Art', value: 25, icon: 'fas fa-palette' } ,
            { text: 'Celebrities', value: 26, icon: 'fas fa-star' },
            { text: 'Animals', value: 27, icon: 'fas fa-dog' },
            { text: 'Vehicles', value: 28, icon: 'fas fa-car' },
            { text: 'Comics', value: 29, icon: 'fas fa-mask' },
            { text: 'Gadgets', value: 30, icon: 'fas fa-cogs' },
            { text: 'Japanese Anime & Manga', value: 31, icon: 'fas fa-user-ninja' },
            { text: 'Cartoons & Animations', value: 32, icon: 'far fa-grin-tongue' }
        ],
        difficulties:[
            { text: 'Any Difficulty', value: null, icon: 'fas fa-thermometer-empty' },
            { text: 'Easy', value: 'easy', icon: 'fas fa-thermometer-quarter' },
            { text: 'Medium', value: 'medium', icon: 'fas fa-thermometer-half' },
            { text: 'Hard', value: 'hard', icon: 'fas fa-thermometer-three-quarters' }
        ],
        types: [
            { text: 'Any Type', value: null, icon: 'fas fa-random' },
            { text: 'Multiple Choice', value: 'multiple', icon: 'fas fa-bars' },
            { text: 'True / False', value: 'boolean', icon: 'fas fa-toggle-on' }
        ],
    } as OptionState,
    getters: {
        getSelectedOptions: function(state: OptionState){
            return state.selectedOptions;
        },
        getTotalQuestions: function(state: OptionState){
            return state.selectedOptions.number;
        },
        getCategories: function(state: OptionState){
            return state.categories;
        },
        getDifficulties: function(state: OptionState){
            return state.difficulties;
        },
        getTypes: function(state: OptionState){
            return state.types;
        }
    } as GetterTree<OptionState, RootState>,
    mutations: {
        setUserOptions: function(state: OptionState, userOptions: UserOptions){
            state.selectedOptions = userOptions;
        }
    } as MutationTree<OptionState>,
    actions: {
        uploadOptions: function(store, userOptions: UserOptions){
            store.commit('setUserOptions', userOptions);
        }
    } as ActionTree<OptionState, RootState>
};