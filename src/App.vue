<template>
  <v-app>
    
    <v-main>
      
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import LogoutButton from "./common/logout/LogoutComponent.vue"
import ToolbarComponent from "./common/toolbar/Toolbar.vue"
export default Vue.extend({
  name: "App",
  components:{ToolbarComponent}
});
</script>

<style>
html.js-focus-visible {
  overflow-y: auto;
}
</style>
