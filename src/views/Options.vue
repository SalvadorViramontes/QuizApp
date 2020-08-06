<template>
    <div class="jumbotron mt-3 pt-0">
        <div class="row" style="height: inherit">
            <div class="col-md-12" style="height: inherit">
                <h1 class="display-4">Options</h1>
                <p class="lead">Please select the next options to start the application: </p>
                <div class="row">
                    <div class="col-md-12">
                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <label class="input-group-text" for="selectedAmount"> Number of Questions: </label>
                            </div>
                            <input type="number" class="form-control" id="selectedAmount" min="1" v-model="selectedAmount">
                        </div>
                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <label class="input-group-text" for="selectedCategory"> Category: </label>
                            </div>
                            <select class="form-control" id="selectedCategory" data-show-content="true" v-model="selectedCategory">
                                <option 
                                v-for="(category, index) in categories"
                                v-bind:value="category.value"
                                v-bind:key="index"
                                v-bind:data-content="optionCategories[index]"
                                >
                                {{category.text}}
                                </option>
                            </select>
                        </div>
                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <label class="input-group-text" for="selectedDifficulty"> Difficulty: </label>
                            </div>
                            <select class="form-control" id="selectedDifficulty" data-show-content="true" v-model="selectedDifficulty">
                                <option 
                                v-for="(difficulty, index) in difficulties"
                                v-bind:value="difficulty.value"
                                v-bind:key="index"
                                v-bind:data-content="optionDifficulties[index]"
                                >
                                {{difficulty.text}}
                                </option>
                            </select>
                        </div> 
                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <label class="input-group-text" for="selectedType"> Type: </label>
                            </div>
                            <select class="form-control" id="selectedType" data-show-content="true" v-model="selectedType">
                                <option 
                                v-for="(type, index) in types"
                                v-bind:value="type.value"
                                v-bind:key="index"
                                v-bind:data-content="optionTypes[index]"
                                >
                                {{type.text}}
                                </option>
                            </select>
                        </div> 
                    </div>
                </div>
                <button type="button" class="btn btn-primary" v-on:click="startQuiz"> Start </button>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from "vue-property-decorator";
    import { NullableNumber, NullableString } from '../store/types';
    import { TextValue, UserOptions } from "../store/modules/optionTypes"
    import $ from "jquery";
    import 'bootstrap/dist/css/bootstrap.css'
    import 'bootstrap-select/dist/css/bootstrap-select.css'
    import 'bootstrap'
    import 'bootstrap-select';

    @Component
    export default class Options extends Vue {
        public selectedAmount = 5;
        public selectedCategory: NullableNumber = null;
        public selectedDifficulty: NullableString = null;
        public selectedType: NullableString = null;

        get categories(){
            return this.$store.getters['OptionsModule/getCategories'];
        }

        get difficulties(){
            return this.$store.getters['OptionsModule/getDifficulties'];
        }

        get types(){
            return this.$store.getters['OptionsModule/getTypes'];
        }

        get optionCategories(){
            const strArray: Array<string> = [];
            this.categories.forEach(function(item: TextValue){
                strArray.push('<i class=\'' + item.icon + '\'></i>  ' + item.text);
            });
            return strArray;
        }

        get optionDifficulties(){
            const strArray: Array<string> = [];
            this.difficulties.forEach(function(item: TextValue){
                strArray.push('<i class=\'' + item.icon + '\'></i>  ' + item.text);
            });
            return strArray;
        }

        get optionTypes(){
            const strArray: Array<string> = [];
            this.types.forEach(function(item: TextValue){
                strArray.push('<i class=\'' + item.icon + '\'></i>  ' + item.text);
            });
            return strArray;
        }

        public startQuiz(): void{
            const userOptions: UserOptions = {
                number: this.selectedAmount,
                category: this.selectedCategory,
                difficulty: this.selectedDifficulty,
                type: this.selectedType
            }
            this.$store.dispatch('OptionsModule/uploadOptions',userOptions);
            this.$router.push({name:'Quiz'});
        } 

        mounted() {
            $('select').selectpicker();
        }
    }
</script>

<style lang="scss" scoped>

    .input-group-text{
        background-color: #495057;
        color: white;
    }

    h1 { 
        margin-top: 1.5rem;
    }

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

    @media (max-width: 576px) {
        .jumbotron{
            width: 75vw;
        }
    }
</style>