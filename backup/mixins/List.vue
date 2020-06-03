<template>
  <div class="container">
    <div class="row">
    <div class="col-md-6 ">
      <h1>Filter & Mixins</h1>
      <input type="text" class="form-control" v-model="filterText" >
      <ul>
        <li v-for="fruit in filteredFruit" :key="fruit" >{{fruit}}</li>
      </ul>
    </div>
  </div>
  </div>
</template>

<script>
import {fruitMixin} from '../fruitMixin'
export default {
    mixins: [fruitMixin]
};
</script>

<style>
</style>
