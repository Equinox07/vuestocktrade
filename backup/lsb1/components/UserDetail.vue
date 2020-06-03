<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>{{switchName()}}</p>
        <p>Age: {{userAge}}</p>
        <button @click="resetName" >Reset Name</button>
    </div>
</template>

<script>
    import { eventBus } from "../main";
    export default {
        props: {
            username: {
                type: String
                },
                userAge: Number
        },
        methods: {
            switchName: function() {
                return this.username.split('').reverse().join('');
            },
            resetName: function() {
                this.username = 'James';
                this.$emit('nameWasReset', this.username);
            }
        },
        created: function(){
            eventBus.$on('ageWasEditted', (data) => {
                this.userAge = data;
            })
        }
    }
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
