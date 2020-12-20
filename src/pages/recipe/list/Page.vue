<template>

  <app-layout>
   <logout-button />
    <v-card>
        <v-card-title class="text-h4">
        Recipes
      </v-card-title>
       
   
      <v-card-text>
        
        <search-bar-component :search-text="searchText" :on-search="onSearch" />
           
            
            <button-component v-bind="{onSave, onUpdateRecipe, recipe,recipes}"  ></button-component>
            
     
         
    
        <table-component :recipes="recipes" :recipe="recipe" />
      </v-card-text>
    </v-card>
  
  </app-layout>
</template>

<script lang="ts">
import Vue, { PropOptions } from "vue";
import { AppLayout } from "../../../common/layouts";
import { Recipe } from "./viewModel";
import { TableComponent, SearchBarComponent,ButtonComponent } from "./components";
import LogoutButton from "../../../common/logout/LogoutComponent.vue"

export default Vue.extend({
  name: "RecipeListPage",
  components: { AppLayout, TableComponent, SearchBarComponent , ButtonComponent,LogoutButton},
  props: {
    recipes: { required: true } as PropOptions<Recipe[]>,
    searchText: String,
    recipe:{required:true},
    onSearch: { required: true } as PropOptions<(value: string) => void>,
    onSave:{required:true},
    onUpdateRecipe:{required:true},
    snackbar:{required:true}
  },
});
</script>
