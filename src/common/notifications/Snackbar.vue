<template>
  <div>
  
  <v-snackbar v-model="snackbar" :timeout="5000">
      <v-card-text>{{text}}</v-card-text>
      <v-btn text dark @click="snackbar=false" >Cerrar</v-btn>
  </v-snackbar> 
  </div>
</template>
<script>
  import Vue,{PropOptions} from "vue";
  export default {
    name:"SnackbarComponent",
    props:{
     snackbar:{ required: true }
     
    },
    data: () => ({
      
      text: `Error en el inicio de sesion`,
    }),
  }
</script>