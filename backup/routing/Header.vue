<template>
    <ul class="nav nav-pills">
        <li class="nav-item">
            <router-link to="/" class="nav-link" active-class="active" exact >Home</router-link>
        </li>
        <li class="nav-item">
            <router-link to="/user" class="nav-link" active-class="active" >User</router-link>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item">
            <a class="nav-link disabled" href="#">Disabled</a>
        </li>
    </ul>
</template>

<script>
export default {

}
</script>

<style>

</style>