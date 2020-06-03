import Vue from 'vue'
import App from './App.vue'

Vue.filter('to-lowecase', function(value){
    return value.toLowerCase();
});

// Vue.mixin({});

new Vue({
  el: '#app',
  render: h => h(App)
})

