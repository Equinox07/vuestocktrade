<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Directives</h1>
        <p v-text="'A sample Text'"></p>
        <p v-html="'A sample Text'"></p>
      </div>
      <hr />
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Custom Directives</h1>
        <p v-highlight.delayed="'red'">Colour this</p>
        <p v-local-highlight:background.blink.delayed="{mainColor:'red', secondColor:'green', delay: 500}">Another Direct</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  directives: {
    "local-highlight": {
      bind(el, binding, vnode) {
        // el.style.backgroundColor='green';
        // el.style.backgroundColor=binding.value;
        var delay = 0;
        if (binding.modifiers["delayed"]) {
            delay = 5000;
        }
        if (binding.modifiers["blink"]) {
          let mainColor = binding.value.mainColor;
          let secondColor = binding.value.secondColor;
          let currentColor = mainColor;
          setTimeout(() => {
            setInterval(() => {
              (currentColor == secondColor)
                ? currentColor = mainColor
                : currentColor = secondColor;
              if (binding.arg == "background") {
                el.style.backgroundColor = currentColor;
              } else {
                el.style.color = currentColor;
              }
            }, 1000);
          }, binding.value.delay);
        }else {
            setTimeout(function() {
                if (binding.arg == "background") {
                    el.style.backgroundColor = binding.value;
                } else {
                    el.style.color = binding.value;
                }
            }, delay);
        }
      }
    }
  }
};
</script>

<style>
</style>
