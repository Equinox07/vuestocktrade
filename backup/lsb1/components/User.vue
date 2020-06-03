<template>
    <div class="component">
        <h1>The User Component</h1>
        <p>I'm an awesome User!</p>
        <button @click="changeName" >Change my Name</button>
        <p>User-Age: {{age }}</p>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-6">
                <app-user-detail :username="name" @nameWasReset="name = $event" ></app-user-detail>
            </div>
            <div class="col-xs-12 col-sm-6">
                <app-user-edit :userAge="age" ></app-user-edit>
            </div>
        </div>
    </div>
</template>

<script>
    import UserDetail from './UserDetail.vue';
    import UserEdit from './UserEdit.vue';

    export default {
        components: {
            appUserDetail: UserDetail,
            appUserEdit: UserEdit
        },
        data: function() {
            return {
                name: "Adventure",
                age: 27
            }
        }, 
        methods: {
            changeName: function() {
                console.log('Change Name...');
                this.name = "Twisted";
            }
        }
    }
</script>

<style scoped>
    div {
        background-color: lightblue;
    }
</style>
