<template>
   <div class="row">
    <div class="col-md-6">
        <h3>Some User Details</h3> <br>
        <p>User Locale: {{$route.query.locale}}</p>
        <p>User Analytics: {{$route.query.q}}</p>
        <br> <br>
        <button class="btn btn-primary" @click="confirmed = true" >Confirmed</button>
            <div style="height:700px;" >
            </div>
        <p id="data">Some Extra Data</p>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            confirmed: false
        }
    },
    beforeRouteLeave (to, from, next) {
        if(this.confirmed){
            next();
        }else{
            if (confirm(' Are you sure')) {
                next();
            }
            next(false);
        }
    }
}
</script>