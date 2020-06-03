<template>
  <div class="row">
    <div class="col-md-8">
    <form class="form">
        <div class="form-group">
            <label for="quote">Quote</label>
            <textarea class="form-control" v-model="quote" name="" id="" cols="30" rows="10"></textarea>
        </div>
        <div class="form-group">
          <button class="btn btn-primary" @click.prevent="addNew" >Add Quote</button>
        </div>
    </form>
      </div>
  </div>
</template>

<script>

export default {
    data: function(){
        return {
            quote: ""
        }
    },
    methods: {
        addNew: function() {
            this.$emit('quoteAdded', this.quote);
            this.quote = '';
        }
    },
    components: {
    }
}
</script>

<style>

</style>