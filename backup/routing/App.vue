<template>
  <div class="container">
    <div class="row ">
      <div class="col-md-6 mr-auto ml-auto mt-3">
          <h4 class="text-center">Routing</h4>
      </div>
  </div>
      <app-header></app-header>
  <hr>
    <div class="row ">
      <div class="col-md-6 ml-auto mr-auto ">
        <router-view name="header-top" ></router-view>
        <router-view></router-view>
        <router-view name="header-bottom"></router-view>
      </div>
  </div>
  </div>
</template>

<script>
import HeaderVue from './Header.vue';

export default {
   components: {
     'appHeader' : HeaderVue
   }

};
</script>

<style>
 
</style>
