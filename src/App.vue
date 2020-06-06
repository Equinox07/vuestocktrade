<template>
<div class="container">
    <app-header></app-header>
    <div class="row">
      <div class="col-lg-12">
        <transition name="slide" mode="out-in" >
        <router-view></router-view>
        </transition>
      </div>
    </div>
</div>
</template>

<script>
import HeaderVue from './components/Header.vue'

export default {
  name: 'App',
  components: {
    'appHeader': HeaderVue
  },
  created() {
    this.$store.dispatch('initStocks');
  },
}
</script>

<style>
 body {
   padding: 30px;
 }
 /* .slide-enter{
    opacity: 0;
  } */
  .slide-enter-active{
      animation: slide-in 200ms ease-out forwards;
      /* transition: opacity .5s; */
  }
  /* .slide-move{
    transition: transform 1s;
  }
  .slide-leave{

  } */
  .slide-leave-active{
      animation: slide-out 200ms ease-out forwards;
      /* transition: opacity 1s;
      opacity: 0; */
  } 

  @keyframes slide-in {
    from{
      transform: translateY(-30px);
      opacity: 0;
    }
    to{
      transform: translateY(0);
      opacity: 1;
    }
  }
  @keyframes slide-out {
    from{
      transform: translateY(0);
      opacity: 1;
    }
    to{
      transform: translateY(-30px);
      opacity: 0;
    }
  }
</style>
