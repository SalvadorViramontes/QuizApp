<template>
    <div class="jumbotron mt-3 pt-0">
        <div class="row" style="height: inherit">
            <div class="col-md-8 col-sm-12 showTxT">
                <h1 class="display-4">Congratulations!</h1>
                <h2 class="display-5">You finished the Quiz</h2>
                <p class="lead">Your score is {{rightAnswers}} of {{totalQuestions}} questions</p>
                <p class="lead">
                    <a class="btn btn-success btn-lg" @click.prevent="goToScores" role="button" href=""> Go to Scores </a>
                </p>
            </div>
            <div class="col-md-4 hideMobile" style="height: inherit">
                <img class="gal" src="../assets/resultsWoman.png">
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .jumbotron{
        margin-bottom: 0;
        height: 75vh;
        //padding: 0;
        position: absolute;
        top: 50%;
        left: 50%;
        -ms-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
    }

    a.btn{
      color: white;

      &:hover{
        color: lightgrey;
      }
    }

    .showTxT {
        padding-top: 10%;
        text-align: center;
    }

    .gal{
        position: relative;
        height: 70vh;
        width: auto;
        -ms-transform: translate(-25%, 2rem);
        transform: translate(-25%, 2rem);
    }

    @media (max-width: 576px) {
        .hideMobile{
            display: none;
        }

        .jumbotron{
            width: 75vw;
        }
    }
</style>

<script lang="ts">
    import { Component, Vue } from "vue-property-decorator";

    @Component
    export default class Results extends Vue {
        get rightAnswers(){
            return this.$store.getters['HeaderModule/getCorrectAnswers'];
        }

        get totalQuestions(){
            return this.$store.getters['HeaderModule/getAnsweredQuestions'];
        }

        public goToScores(): void{
            this.$router.push({name:'Scores'});
        }
    }
</script>