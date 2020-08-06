import Vue from 'vue'
import Vuex, { StoreOptions } from 'vuex'
import { RootState } from './types'
import { HeaderModule } from './modules/header'
import { QuestionModule } from './modules/questions'
import { OptionsModule } from './modules/options'
import { QuizModule } from './modules/quiz'

Vue.use(Vuex)

const storeOption: StoreOptions<RootState> = {
  state: {
    myState: null
  } as RootState,
  modules: {
    HeaderModule,
    QuestionModule,
    OptionsModule,
    QuizModule
  }
}

export default new Vuex.Store (storeOption)