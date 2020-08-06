<template>
    <div>
        <b-navbar variant="dark">
            <b-navbar-brand> <img src="../assets/logo.png"> </b-navbar-brand>

            <b-navbar-nav>
                <b-nav-text> <b>QuizApp</b> </b-nav-text>
                <b-nav-text> <b>Total: {{ numCorrect }}/{{ numTotal }}</b> </b-nav-text>
                <router-link to="/">Home</router-link> |
                <router-link to="/about">About</router-link> | 
                <router-link to="/options">Options</router-link>
            </b-navbar-nav>
        </b-navbar>
    </div>
</template>

<style lang="scss">
    .navbar{
        height: 3rem;

        .navbar-brand {
            height: 99%;
            padding: 0;

            img{
                height: inherit;
                width: auto;
                vertical-align: center;
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
    import Vue from 'vue'
    //import Component from 'vue-class-component'

    export default class Header extends Vue {

        get numCorrect(){
            return this.$store.getters['HeaderModule/getCorrectAnswers'];
        }

        get numTotal(){
            return this.$store.getters['HeaderModule/getAnsweredQuestions'];
        }
    }
</script>