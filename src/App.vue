<template>
  <div class="container">
    <div class="row ">
      <div class="col-md-6 mr-auto ml-auto mt-3">
          <h4 class="text-center">Vuex</h4>
      </div>
  </div>
  <hr>
    <div class="row ">
        <app-counter></app-counter>
        <app-result></app-result>
        <hr>
        <app-another-result></app-another-result>
        <app-another-counter></app-another-counter>
        <hr>
        <input type="text" v-model="value" >
        <small>{{value}}</small>

        <!-- <app-counter @updated="counter += $event" ></app-counter>
        <app-result :counter="counter" ></app-result> -->
  </div>
  </div>
</template>

<script>
import CounterVue from './components/Counter.vue';
import ResultVue from './components/Result.vue';
import AnotherResultVue from './components/AnotherResult.vue';
import AnotherCounterVue from './components/AnotherCounter.vue';

export default {
  // data() {
  //   return {
  //     counter: 0
  //   }
  // },
  computed: {
    value: {
      get() {
        return this.$store.getters.value;
      },
      set(value){
        this.$store.dispatch('updateValue', value);
      }
    }
    // value(){
    //   return this.$store.getters.value;
    // }
  },
  methods: {
    updateValue(event){
      this.$store.dispatch('updateValue', event.target.value)
    }
  },
  components: {
    'appCounter' : CounterVue,
    'appResult' : ResultVue,
    'appAnotherResult': AnotherResultVue,
    'appAnotherCounter': AnotherCounterVue
  }
};
</script>

<style>
 
</style>
