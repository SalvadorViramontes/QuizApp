<template>
  <div class="jumbotron mt-3 pt-0" v-if="questionsReady">
    <div class="row" style="height: inherit">
      <div class="col-md-12" style="height: inherit">
        <h1 class="display-4"> Question #{{questionNumber}}</h1>
        <p class="lead" v-html="currentQuestion.question"></p>
        <hr class="my-4">
        <div class="row">
          <div class="col-md-12">
            <ul class="list-group">
              <li class="list-group-item"
                v-for="(answer, index) in shuffledAnswers"
                v-bind:key="index"
                @click.prevent="selectAnswer(index)"
                v-bind:class="answerClass(index)"
              >
                {{ answer }}
              </li>
            </ul>
          </div>
        </div>

        <button type="button" class="btn btn-primary" 
          v-on:click.prevent="submitAnswer"
          v-bind:disabled="selectedIndex === null"
          v-show="!answered"
        > 
          Submit 
        </button>

        <button type="button" class="btn btn-success" href="#" 
          v-on:click.prevent="next"
          v-show="answered"
        >
          Next Question 
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { Component, Vue, Watch } from "vue-property-decorator";
  import { NullableNumber, Question } from "../store/types";
  import * as _ from "lodash";

  @Component
  export default class Quiz extends Vue {
    public selectedIndex: NullableNumber = null;
    public correctIndex: NullableNumber = null;
    public shuffledAnswers: Array<string> = [];
    public answered = false;

    get questionNumber(): number{
      return this.$store.getters['HeaderModule/getCurrentIndex'] + 1;
    }

    get currentQuestion(): Question{
      return this.$store.getters['QuestionModule/getCurrentQuestion'];
    }

    get questionsReady(): boolean{
      return this.$store.getters['QuestionModule/ready'];
    }

    @Watch('currentQuestion', { immediate: false })
    function(){
      this.selectedIndex = null;
      this.answered = false;
      this.shuffleAnswers();
    }

    public increment(isCorrect: boolean): void{
      this.$store.dispatch('HeaderModule/answeredQuestion', isCorrect);
    }

    public next(): void{
      this.$store.dispatch('HeaderModule/nextQuestion');
    }

    public selectAnswer(index: number): void{
        this.selectedIndex = index;
    }

    public submitAnswer(): void{
      let isCorrect = false;
      if(this.selectedIndex === this.correctIndex){
          isCorrect = true;
      }
      this.answered = true;
      this.increment(isCorrect);
    }

    public shuffleAnswers(): void{
      const answers = [...this.currentQuestion.incorrect_answers, 
          this.currentQuestion.correct_answer];
      this.shuffledAnswers = _.shuffle(answers);
      this.correctIndex = this.shuffledAnswers.indexOf(this.currentQuestion.correct_answer);
    }

    public answerClass(index: number): string{
      let answerClass = '';
      if(!this.answered && this.selectedIndex === index){
        answerClass = 'selected';
      }
      else if(this.answered && this.correctIndex === index){
        answerClass = 'correct';
      }
      else if(this.answered && this.selectedIndex === index && this.correctIndex !== index){
        answerClass = 'incorrect'
      }
      return answerClass;
    }

    mounted() {
      this.$store.dispatch('QuestionModule/pollQuestions');
    }
  }
</script>

<style scoped>
    .list-group{
        margin-bottom: 15px;
    }

    .list-group-item:hover:not(.selected):not(.correct):not(.incorrect){
        background-color: #EEE;
        cursor: pointer;
    }

    .btn{
        margin: 0 5px;
    }

    .selected{
        background-color: lightblue;
    }

    .correct{
        background-color: lightgreen;
    }

    .incorrect{
        background-color: indianred;
    } 
</style>