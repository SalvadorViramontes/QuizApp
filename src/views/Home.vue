<template>
  <div class="jumbotron mt-3 pt-0">
    <div class="row" style="height: inherit">
      <div class="col-md-4 hideMobile" style="height: inherit">
        <img class="guy" src="../assets/ideaMan.png">
      </div>
      <div class="col-md-8 col-sm-12 showTxT">
        <h1 class="display-4">So you think you know stuff?</h1>
        <p class="lead">If that's the case, then let's find out!</p>
        <p class="lead">
          <a class="btn btn-success btn-lg" @click.prevent="goToOptions" role="button" href=""> Start Quiz </a>
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import { Prop } from 'vue-property-decorator';
  import Component from 'vue-class-component';

  @Component
  export default class Home extends Vue {
    @Prop() private msg!: string;

    goToOptions(): void{
      this.$router.push({name:'Options'});
    }
  }

  // export default {
  //   name: 'Home'
  // }
</script>

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
        padding-top: 20%;
        text-align: center;
    }

    .guy{
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
