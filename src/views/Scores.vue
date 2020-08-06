<template>
    <div class="jumbotron mt-3 pt-0">
        <div class="row" style="height: inherit">
            <div class="col-sm-12">
                <h1 class="display-4">This is the Scores Section!</h1>
                <p class="lead">Your score goes here</p>
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

    @media (max-width: 576px) {
        .jumbotron{
            width: 75vw;
        }
    }
</style>

<script lang="ts">
    import { Component, Vue } from "vue-property-decorator";

    @Component
    export default class Scores extends Vue {
        
    }
</script>