<template>
  <div class="container">
    <div class="row">
    <div class="col-md-6">
      <h1>Animations</h1>
      <hr>
      <button @click="show = !show" class="btn btn-primary" >Show Alert</button>
      <br><br>
      <transition name="fade" >
        <div class="alert alert-info" v-if="show" >This is an infomations</div>
      </transition>
      <transition name="slide" >
        <div class="alert alert-info" v-if="show" >This is an infomations</div>
      </transition>
      <transition 
      enter-active-class="animate__animated animate__bounce"
      leave-active-class="animate__animated animate__shake"
      >
        <div class="alert alert-info" v-if="show" >This is an infomations</div>
      </transition>
      <transition name="fade" mode="out-in" >
        <div class="alert alert-info" v-if="show"  key="info" >This is an infomations</div>
        <div class="alert alert-warning" v-else key="warning" >This is an Warning</div>
      </transition>
      <br>
      <button class="btn btn-primary" @click="load = !load" >Load / Remove Element</button>
      <br>
      <br>
      <transition
        @before-enter="beforeEnter"
        @enter="enter"
        @after-enter="afterEnter"
        @enter-cancelled="enterCancelled"

        @before-leave="beforeLeave"
        @leave="leave"
        @leave-after="afterLeave"
        @leave-cancelled="leaveCancelled"
        :css="false"
      >
      <div class="col-lg-12 bg-success" v-if="load" style="height: 100px; width: 300px;" ></div>
      </transition>
      <hr>
      <button class="btn btn-primary"
      @click="selectedComponent = (selectedComponent == 'appSuccessAlert') ? 'appDangerAlert' : 'appSuccessAlert'"
       >Toggle Component</button>
      <br> <br>
      <transition name="fade" mode="out-in" >
      <component :is="selectedComponent"></component>
      </transition>
    </div>
    <div class="col-md-6">
       <h1>Group Animations</h1>
       <button class="btn btn-primary"
      @click="addItem"
       >Add Item</button>
      <br> <br>
      <ul class="list-group">
        <transition-group name="slide">
        <li style="cursor:pointer"
        class="list-group-item" v-for="(number, index) in numbers" :key="number" @click="removeItem(index)" >{{number}}</li>
        </transition-group>
      </ul>
    </div>
  </div>
  </div>
</template>

<script>
import SuccessAlertVue from './components/SuccessAlert.vue';
import DangerAlertVue from './components/DangerAlert.vue';

export default {
  data: function() {
    return {
      show: true,
      load: false,
      elementWidth: 100,
      selectedComponent: 'appSuccessAlert',
      numbers: [1,2,3,4,5,6]
    }
  },
  methods: {
    beforeEnter(el) {
      console.log('before Enter...');
      this.elementWidth = 100;
      el.style.width = this.elementWidth + 'px';
    },
    enter(el, done) {
      let round = 1;
      const internal = setInterval(() => {
        el.style.width = (this.elementWidth + round * 10) + 'px';
        round++;
        if(round > 20 ){
          clearInterval(internal);
          done();
        }
      }, 20);
      console.log('enter...');
      done();
    },
    afterEnter (el) {
      console.log('After Enter...');
    },
    afterLeave (el) {
      console.log('After Leave...');
    },
    enterCancelled (el) {
      console.log('enterCancelled...');
    },
    beforeLeave(el) {
      console.log('beforeLeave...');
      // this.elementWidth = 100;
      el.style.width = '300px';
      el.style.width = this.elementWidth + 'px';
    },
    leaveCancelled(el){
      console.log('leave Cancelled...');
    },
    leave(el, done) {
      console.log('leave...');
      let round = 1;
      const internal = setInterval(() => {
        el.style.width = (this.elementWidth - round * 10) + 'px';
        round++;
        if(round > 20 ){
          clearInterval(internal);
          done();
        }
      }, 20);
    },
    addItem() {
        const pos = Math.floor(Math.random() * this.numbers.length);
        this.numbers.splice(pos, 0, this.numbers.length + 1);
    },
    removeItem(index) {
      this.numbers.splice(index, 1);
    }
  },
  components: {
    'appSuccessAlert': SuccessAlertVue,
    'appDangerAlert': DangerAlertVue
  }

};
</script>

<style>
  .fade-enter{
    opacity: 0;
  }
  .fade-enter-active{
    transition: opacity 1s;
  }
  .fade-leave{
    opacity: 1s;
  }
  .fade-leave-active{
    transition: opacity 1s;
    opacity: 0;
  }

  .slide-enter{
    opacity: 0;
  }
  .slide-enter-active{
      animation: slide-in 1s ease-out forwards;
      transition: opacity .5s;
  }
  .slide-move{
    transition: transform 1s;
  }
  .slide-leave{

  }
  .slide-leave-active{
      animation: slide-out 1s ease-out forwards;
      transition: opacity 1s;
      opacity: 0;
  } 

  @keyframes slide-in {
    from{
      transform: translateY(20px);
    }
    to{
      transform: translateY(0);
    }
  }
  @keyframes slide-out {
    from{
      transform: translateY(0);
    }
    to{
      transform: translateY(20px);
    }
  }
</style>
