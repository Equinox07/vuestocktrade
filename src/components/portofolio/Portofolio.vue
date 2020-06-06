<template>
    <div class="container">
      <h1>Portofilio</h1>
      <div class="row">
        <app-stock v-for="(stock, index) in stocks" :key="index" :stock="stock" ></app-stock>
      </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import StockVue from './Stock'

export default {
  // props: ['stocks'],
  components: {
    'appStock': StockVue
  },
  methods: {
    getStocks: function () {
      console.log(this.stocks);
    }
  },
  computed: {
    ...mapGetters({
        stocks: 'stockPortofolio'
        }),
    // portstocks () {
    //   return this.$store.getters.stockPortofolio;
    // }
  }
}
</script>

<style>

</style>