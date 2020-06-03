<template>
  <div class="container">
    <div class="row ">
      <div class="col-md-6 mr-auto ml-auto mt-3">
          <h4 class="text-center">The Super Quiz</h4>
      </div>
  </div>
  <hr>
    <div class="row ">
      <div class="col-md-6 mr-auto ml-auto">
      <transition name="flip" mode="out-in">
        <component :is="mode" @answered="answered($event)" @confirmed="mode='app-question'" ></component>
      </transition>
      </div>
  </div>
  </div>
</template>

<script>
import QuestionVue from './components/Question.vue';
import AnswerVue from './components/Answer.vue';
export default {
    data() {
      return {
        mode: 'app-question'
      }
    },
    methods: {
      answered: function(isCorrect) {
        if (isCorrect) {
          this.mode = 'app-answer';
        }else {
          this.mode ='app-question';
        }
      }
    },
    components: {
      'appQuestion' : QuestionVue,
      'appAnswer': AnswerVue
    }


};
</script>

<style>
 .flip-enter {
        /*transform: rotateY(0deg);*/
    }

    .flip-enter-active {
        animation: flip-in  0.5s ease-out forwards;
    }

    .flip-leave {
        /*transform: rotateY(0deg);*/
    }

    .flip-leave-active {
        animation: flip-out 0.5s ease-out forwards;
    }

    @keyframes flip-out {
        from {
            transform: rotateY(0deg);
        }
        to {
            transform: rotateY(90deg);
        }
    }

    @keyframes flip-in {
        from {
            transform: rotateY(90deg);
        }
        to {
            transform: rotateY(0deg);
        }
    }
</style>
