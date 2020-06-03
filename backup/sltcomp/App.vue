<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-md-12">
                <button @click="selectedComponent = 'app-quote'" class="btn btn-primary" >Quote</button>
                <button @click="selectedComponent = 'app-author'" class="btn btn-success">Author</button>
                <button  @click="selectedComponent = 'app-new'" class="btn btn-info">New</button>
                <hr>
                <p>{{selectedComponent}}</p>
                <keep-alive>
                <component :is="selectedComponent">
                    <p>Default Data</p>
                </component>
                </keep-alive>
                <!-- <app-quote>
                    <h1 slot="title" >{{title}}</h1>
                    <span slot="sub-title">
                        <slot>Default Sub-title</slot>
                    </span>
                    <h6 slot="content" > Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum omnis corrupti quod odit quasi minus non </h6>
                    <button class="btn btn-primary">Read More</button>
                </app-quote> -->
            </div>
        </div>
    </div>
</template>

<script>
import Quoute from './components/Quoute.vue'
import Author from './components/Author.vue'
import New from './components/New.vue'

    export default {
        data: function() {
            return {
                title: 'A New Title',
                selectedComponent: 'app-quote'
            }
        },
        components: {
            'app-quote': Quoute,
            'app-author': Author,
            'app-new': New
        }
    }
</script>

<style>
    /* div.component {
        border: 1px solid black;
        padding: 30px;
    } */
</style>
