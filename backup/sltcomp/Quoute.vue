<template>
  <div>
      <div class="title">
            <slot name="title" ></slot>
            <slot name="sub-title" ></slot>
      </div>
      <div class="content">
          <slot name="content" ></slot>
      </div>
      <div>
      <slot></slot>
      </div>
          
  </div>
</template>

<script>
export default {
    // props: ['title']
}
</script>

<style scoped >
  div{
      border: 1px solid #ccc;
      padding: 30px;
      box-shadow: 1px 1px 2px black;
      margin: 30px auto;
      text-align: center;
  }
  h6{
      color: blue;
  }
  .title{
      font-style: italic;
  }
</style>