<template>
    <div class="col-md-6 mt-5">
      <div class="card">
        <div class="card-header bg-info text-white">
         {{stock.name}}<small>(Price: {{stock.price}} | {{stock.quantity}})</small>
        </div>
        <div class="card-body">
          <div class="float-left">
            <input type="text" v-model.number="quantity" class="form-control" placeholder="Quantity">
          </div>
         <div class="pull-right">
           <button class="btn btn-success" @click="sellStock"
           :disabled="insufficientQuantity || quantity <= 0 || !Number.isInteger(quantity) "
             >{{insufficientQuantity ? 'Not Enough Stocks' : 'SELL'}}</button>
         </div>
        </div>
      </div>
    </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  props: ['stock'],
  data() {
    return {
      quantity: 0
    }
  },
  computed: {
    insufficientQuantity () {
      return this.quantity > this.stock.quantity;
    }
  },
  methods: {
    ...mapActions({
        placeSellOrder: 'sellStock'
    }),
    sellStock(){
        const order = {
            stockId: this.stock.id,
            stockPrice: this.stock.price,
            quantity: this.quantity,
        }
        this.placeSellOrder(order);
        this.quantity = 0;
    }
  },
}
</script>

<style>

</style>