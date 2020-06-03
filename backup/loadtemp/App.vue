<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-md-12">
                <button @click="selectedComponent = 'app-blue'" class="btn btn-primary" >Load Blue Template</button>
                <button @click="selectedComponent = 'app-green'" class="btn btn-success">Load Green Template</button>
                <button  @click="selectedComponent = 'app-red'" class="btn btn-danger">Load Red Template</button>
                <hr>
                <p>{{selectedComponent}}</p>
                <component :is="selectedComponent" ></component>
            </div>
        </div>
    </div>
</template>

<script>
import Blue from './components/Blue.vue'
import Green from './components/Green.vue'
import Red from './components/Red.vue'

    export default {
        data: function() {
            return {
                title: 'A New Title',
                selectedComponent: 'app-blue'
            }
        },
        components: {
            'app-blue': Blue,
            'app-green': Green,
            'app-red': Red
        }
    }
</script>

<style>
    /* div.component {
        border: 1px solid black;
        padding: 30px;
    } */
</style>
