<template>
    <div>
    <v-img 
        class="img-recipe"
        v-bind:src="url"
    ></v-img>
    <span></span>
    </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from "vue";

    export default Vue.extend({
        name:"ImageComponenet",
        props:{
            name:String,
            url:String,
            
        },
      
        
    });
</script>

<style scoped>
.img-recipe{
    width: 1000px;
    border-radius: 15px;
    box-shadow: 0 5px 10px 0 ;
    margin-bottom: 50px;
}
</style>