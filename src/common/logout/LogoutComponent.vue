<template>
    <div>
          <v-btn
      class="ma-2 pa-2 "
      color="red"
      outlined
      depressed
      @click="logOut()"
      
    > 
    
      Logout 
      <v-icon class="ml-2">mdi-logout-variant</v-icon>
     
    </v-btn>
    </div>
</template>

<script lang="ts">
    import Vue from "vue";
    import{baseRoutes} from "../../router"
    export default Vue.extend({
        name:"LogoutButton",
        methods: {
            logOut()  {
                return this.$router.push(baseRoutes.login)
            }
        },
    });
</script>

<style scoped>

</style>
