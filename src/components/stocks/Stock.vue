<template>
    <div class="col-md-6 mt-5">
      <div class="card">
        <div class="card-header bg-success text-white">
         {{stock.name}}<small>(Price: {{stock.price}})</small>
        </div>
        <div class="card-body">
          <div class="float-left">
            <input type="number" v-model.number="quantity" class="form-control" placeholder="Quantity">
          </div>
         <div class="pull-right">
           <button class="btn btn-success" @click="buyStock"
           :disabled="insufficientFunds || quantity <= 0 || !Number.isInteger(quantity)"
             >{{insufficientFunds ? 'Insufficient Funds' : 'BUY'}}</button>
         </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  props: ['stock'],
  data() {
    return {
      quantity: 0
    }
  },
  methods: {
    buyStock(){
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity,
      };
      console.log(order);
      this.$store.dispatch('buyStock', order);
      this.quantity = 0;
    }
  },
  computed: {
    funds () {
      return this.$store.getters.funds;
    },
    insufficientFunds () {
      // var funds = this.$store.getters.funds;
      return this.quantity * this.stock.price > this.funds;
      // if (amount > funds){
      //   return true;
      // }
    }
  }
}
</script>

<style>

</style>