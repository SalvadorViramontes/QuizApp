import Vue from 'vue'
import Vuex, { StoreOptions, MutationTree, GetterTree } from 'vuex'
import { RootState } from './types'
import { HeaderModule } from './modules/header'
import { QuestionModule } from './modules/questions'
import { OptionsModule } from './modules/options'
import { QuizModule } from './modules/quiz'

Vue.use(Vuex)

const storeOption: StoreOptions<RootState> = {
  state: {
    currentRoute: null
  } as RootState,
  modules: {
    HeaderModule,
    QuestionModule,
    OptionsModule,
    QuizModule
  },
  getters:{
    getCurrentRoute: function(state: RootState){
      return state.currentRoute;
    }
  } as GetterTree<RootState, any>,
  mutations: {
    setCurrentRoute: function(state: RootState, newRoute: string) {
        state.currentRoute = newRoute;
    }
  } as MutationTree<RootState>
}

export default new Vuex.Store (storeOption)