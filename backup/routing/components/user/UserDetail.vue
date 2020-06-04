<template>
  <div class="row">
    <div class="col-md-6">
      <h3>Some User Details</h3>
      <br />
      <p>User Details: {{id}}</p>
      <router-link
        tag="button"
        :to="link"
        class="btn btn-info"
      >Edit User</router-link>
      <!-- <router-link  tag="button" :to="'/user/' + id + '/edit'"
      class="btn btn-info" >Edit User</router-link>-->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      link: {
        name: "userEdit",
        params: { id: this.$route.params.id },
        query: { locale: "en", q: "100" },
        hash: '#data'
      },
      // id: this.$route.params.id,
      id: this.$route.params.id
    };
  },
  beforeRouteEnter (to, from, next) {
      if (true) {
          next();
      } else {
          next(false);
      }
    //   next();
  }
};
</script>

<style scoped>
</style>