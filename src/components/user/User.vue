<template>
<div class="ml-auto mr-auto">
    <h1>The User Page</h1>
    <!-- <button @click="navigateToHome" class="btn btn-primary">Go to Home</button> -->
    <button class="btn btn-primary">Go to Home</button>
    <hr>
    <router-view></router-view>
</div>
</template>

<script>
export default {
    data() {
        return {
            id: this.$route.params.id
        }
    },
    methods: {
        navigateToHome() {
        this.$router.push('/');
        //this.$router.push({path: '/'});
        }
    },
    watch: {
        '$route': function(to, rrom){
            this.id = to.params.id;
        }
    },
}
</script>

<style scoped>

</style>