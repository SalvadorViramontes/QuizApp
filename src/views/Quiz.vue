<template>
  <div class="Quiz">
    <h1>This is the Quiz Section</h1>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from "vue-property-decorator";

  @Component
  export default class Quiz extends Vue {
    public myNumber = 5;

    get selectedOptions(){
      return this.$store.getters['OptionsModule/getSelectedOptions'];
    }

    get allQuestions(){
      return this.$store.getters['QuestionModule/getQuestions'];
    }

    mounted() {
      this.$store.dispatch('QuestionModule/pollQuestions');
    }
  }
</script>