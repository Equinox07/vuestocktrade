<template>
<div>
    <h4>Counter is: {{counter}}</h4>
</div>
</template>

<script>
export default {
    // props: ['counter'],
    computed: {
        counter: function() {
            return this.$store.getters.doubleCounter;
        }
    },
}
</script>

<style>

</style>