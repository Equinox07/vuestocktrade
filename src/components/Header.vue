
<template>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <router-link to="/" class="navbar-brand" >Stock Trader</router-link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav mr-auto">
      <!-- <li class="nav-item active">
         <router-link to="/user" class="nav-link" active-class="active" >Stock Trader</router-link>
      </li> -->
      <li class="nav-item ">
         <router-link to="/portofolio" class="nav-link" active-class="active" >Portofolio</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/stocks" class="nav-link" active-class="active" >Stocks</router-link>
      </li>
     
    </ul>
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" role="button" @click="endDay" >End Day</a>
      </li>
       <li class="nav-item dropdown " :class="{show: isDropdownOpen}" @click="isDropdownOpen = !isDropdownOpen" >
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Save and Load
        </a>
        <div class="dropdown-menu " :class="{show: isDropdownOpen}" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" role="button" @click="saveData" >Save Data</a>
          <a class="dropdown-item" role="button" @click="loadData" >Load Data</a>
        </div>
      </li>

    </ul>
    <div class="navbar-text">
      <strong>FUNDS {{funds | currency}}</strong> 
    </div>
    <!-- <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form> -->
  </div>
</nav>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  data() {
    return {
        isDropdownOpen: false
      }
      
  },
  computed: {
      funds(){
        return this.$store.getters.funds;
      },
    },
    methods: {
      ...mapActions({
        randomizeStocks: 'randomizeStocks',
        fetchData: 'loadData'
      }),
      endDay(){
        console.log('End day...');
        this.randomizeStocks();
      },
      saveData(){
        console.log('Saving data...');
        const data = {
          funds: this.$store.getters.funds,
          stocksPortofolio: this.$store.getters.stockPortofolio,
          stocks: this.$store.getters.stocks

        };
        this.$http.put('data.json', data);
      },
      loadData(){
          this.fetchData();
        }
      }
}
</script>

<style>

</style>