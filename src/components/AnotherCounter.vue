<template>
  <div class="container">
    <div class="col-md-6 ml-auto mr-auto">
      <button class="btn btn-primary" @click="asyncIncrement({by:100, duration: 2000})">Increment</button>
      <button class="btn btn-primary" @click="asyncDecrement({by:50, duration: 1000})">Decrement</button>
      <hr />
    </div>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'
import {mapActions} from 'vuex'
export default {
  data() {
    return {
      counter: 0
    }
  },
  methods: {
      ...mapActions([
            'asyncIncrement',
            'asyncDecrement'
      ]),
    //   increment(){
    //       this.$store.dispatch('increment', payload)
    //   }
    // ...mapMutations([
    //       'increment',
    //       'decrement'
    //   ])
  },
};
</script>

<style>
</style>
