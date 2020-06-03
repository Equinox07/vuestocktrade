<template>
  <div class="container">
    <div class="row ">
      <div class="col-md-6 mr-auto ml-auto mt-3">
          <h4 class="text-center">HTTP</h4>
      </div>
  </div>
  <hr>
    <div class="row ">
      <div class="col-md-6 ">
        <div class="form-group">
          <label for="">User Name</label>
          <input type="text" v-model="user.username" class="form-control">
          <small>{{user.username}}</small>
        </div>
        <div class="form-group">
          <label for="">User Email</label>
          <input type="email" v-model="user.email" class="form-control">
          <small>{{user.email}}</small>
        </div>
        <button @click="submit" class="btn btn-primary">Submit</button>
        <div class="form-group">
          <label for="">Data Node</label>
          <input type="email" v-model="node" class="form-control">
          <small>{{node}}</small>
        </div>
      </div>
      <div class="col-md-6 ">
        <button @click="fetchData" class="btn btn-primary">Fetch User Data</button> <br><br>
        <ul class="list-group">
          <li class="list-group-item" v-for="(user, index) in users" :key="index" > {{user.username}} : {{user.email}}</li>
        </ul>
      </div>
  </div>
  </div>
</template>

<script>

export default {
    data() {
      return {
        user: {
          username: '',
          email: ''
        },
        users: [],
        resource: {},
        node: 'data'
      }
    },
    methods: {
      submit: function() {
        console.log(this.user);
        this.resource.saveAlt(this.user);
        // this.resource.save({}, this.user);
        // this.$http.post('', this.user)
        //   .then((res) => {
        //     console.log(res)
        //     this.fetchData();
        //   }, (err) => {
        //     console.log(err);
        // })
      },
      fetchData: function() {
        this.resource.getData({node: this.node})
        .then((res) => {
            console.log(res);
             const dataArr = [];
             for(let key in res.body){
               dataArr.push(res.body[key]);
             }
             this.users = dataArr;
             console.log(dataArr);
          }, (err) => {
            console.log(err);
          });
        // this.$http.get('vuedata.json')
        //   .then((res) => {
        //     console.log(res.body);
        //      const dataArr = [];
        //      for(let key in res.body){
        //        dataArr.push(res.body[key]);
        //      }
        //      this.users = dataArr;
        //      console.log(dataArr);
        //   }, (err) => {
        //     console.log(err);
        //   })
      }
    },
    created() {
      const customActions = {
        saveAlt: {method: 'POST', url: 'alternative.json'},
        getData: {method: 'GET'}
      };
      this.resource = this.$resource('{node}.json',{}, customActions);
    },


};
</script>

<style>
 
</style>
