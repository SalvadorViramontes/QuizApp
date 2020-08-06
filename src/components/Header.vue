<template>
    <div>
        <nav class="navbar navbar-light bg-dark navbar-expand">
            <div class="navbar-brand">
                <a @click.prevent="goHome()" href="/">
                    <img src="../assets/logo.png">
                </a>
            </div>
            
            <ul class="navbar-nav">
                <li class="navbar-text">
                    <b>QuizApp</b>
                </li>
                <li class="navbar-text">
                    <b>Total: {{ numCorrect }}/{{ numTotal }}</b>
                </li>
            </ul>
        </nav>
    </div>
</template>

<style lang="scss">
    .navbar{
        height: 3rem;

        .navbar-brand {
            height: 99%;
            padding: 0;

            a{
                height: inherit;

                img{
                    height: inherit;
                    width: auto;
                    vertical-align: center;
                }
            }
        }
    }

    .navbar-light .navbar-text {
        color: white !important;

        &:first-child {
            padding-right: 1.5rem;
        }
    }
</style>

<script lang="ts">
    import { Vue } from "vue-property-decorator";
    //import Component from 'vue-class-component'

    export default class Header extends Vue {

        get numCorrect(){
            return this.$store.getters['HeaderModule/getCorrectAnswers'];
        }

        get numTotal(){
            return this.$store.getters['HeaderModule/getAnsweredQuestions'];
        }

        public goHome(): void{
            this.$router.push({name:'Home'});
        }
    }
</script>