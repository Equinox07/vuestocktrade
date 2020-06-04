<template>
<div>
    <h4>Counter is: {{doubleCounter}}</h4>
    <p>Number of Clicks {{stringCounter}}</p>
</div>
</template>

<script>
import {mapGetters} from 'vuex';
export default {
    // props: ['counter'],
    computed: {
        ...mapGetters([
            'doubleCounter',
            'stringCounter'
        ]),
        // counter: function() {
        //    return this.$store.getters.doubleCounter;
        // },
        // clicks: function(){
        //     return this.$store.getters.doubleCounter;
        // }
    },
}
</script>

<style>

</style>