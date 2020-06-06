<template>
  <div>
    <h1>Trade or View your Portofilio</h1>
    <h6>You may save or load your data</h6>
    <h6>Click on 'End Day' to begin a New Day!</h6>
    <p>YOUR FUNDS: {{funds}}</p>
  </div>
</template>

<script>

// import HeaderVue from './Header.vue'
export default {
    components: {

    },
    computed: {
      funds(){
        return this.$store.getters.funds;
      }
    }
}
</script>

<style>

</style>