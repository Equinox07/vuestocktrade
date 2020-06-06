<template>
  <div class="container">
  <h1>Stocks</h1>
  <div class="row">
    <app-stock v-for="(stock, index) in stocks" :key="index" :stock="stock" ></app-stock>
  </div>
  </div>
</template>
<script>
import StockVue from './Stock.vue'
export default {
  components: {
      'appStock': StockVue
  },
  data() {
    return {
    }
  },
  computed: {
    stocks (){
      return this.$store.getters.stocks;
    }
  },

}
</script>

<style>

</style>