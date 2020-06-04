<template>
  <div class="container">
      <div class="col-md-6 ml-auto mr-auto ">
       <button class="btn btn-primary" @click="increment(100)" >Increment</button> 
       <button class="btn btn-primary" @click="decrement(10)">Decrement</button>
      <hr>
      </div>
  </div>
</template>

<script>
import {mapMutations} from 'vuex';
import {mapActions} from 'vuex';
export default {
  data() {
    return {
      counter: 0
    }
  },
  methods: {
      ...mapActions([
            'increment',
            'decrement'
      ]),
    //   ...mapMutations([
    //       'increment',
    //       'decrement'
    //   ])
    // increment(){
    // //   this.counter++;
    //     console.log("Increase");
    //     this.$store.commit('increment');
    //     // this.$store.state.counter++;
    //     // this.$emit('updated', 1)
    // },
    // decrement(){
    // //   this.counter--;
    //     console.log("Decrease");
    //     this.$store.commit('decrement');
    //     // this.$store.state.counter--;
    //     // this.$emit('updated', -1)
    // }
  },
};
</script>

<style>
 
</style>
