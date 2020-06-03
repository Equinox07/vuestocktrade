<template>
  <div class="container">
    <div class="row">
    <div class="col-md-6">
      <h1>Filters</h1>
      <p>{{text | toUppercase | to-lowecase}}</p>
      <hr>
      <input type="text" class="form-control" v-model="filterText" >
      <ul>
        <li v-for="fruit in filteredFruit" :key="fruit" >{{fruit}}</li>
      </ul>
      <hr>
    </div>
    <div class="col-md-6">
      <appFruitList></appFruitList>
    </div>
  </div>
  </div>
</template>

<script>
import ListVue from './components/List.vue';
export default {
  components: {
    'appFruitList': ListVue
  },
  data: function () {
    return {
      text: 'Holla Mundo',
      fruits: ['Apple', 'Banana', 'Mango'],
      filterText: ''
    }
  },
  filters: {
    toUppercase(value){
      return value.toUpperCase();
    }
  },
  computed: {
    filteredFruit: function() {
      return this.fruits.filter((element)=>{
        return element.match(this.filterText);
      });
    }
  }

};
</script>

<style>
</style>
