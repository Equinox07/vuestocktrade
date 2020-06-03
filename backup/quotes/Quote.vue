<template>
      <div class="col-md-2">
          <div class="card">
              <div class="card-body quote">
                  <slot></slot>
              </div>
          </div>
      </div>
</template>

<script>
export default {
    
}
</script>

<style>
    .card-body{
        font-family: 'Courier New', Courier, monospace;
        font-size: 24;
        color: #6e6e6e;
    }
    .quote{
        cursor: pointer;
    }
    .quote:hover{
        background-color: #ffe2e2;
    }
</style>