<template>
 
  <recipe-list-page v-bind="{ searchText, recipes: filteredRecipes, onSearch,onSave, onUpdateRecipe,recipe }" />
</template>

<script lang="ts">
import Vue from "vue";
import { fetchRecipes } from "../../../rest-api/api/recipe";
import { filterRecipesByCommaSeparatedText } from "./business/filterRecipeBusiness";
import { mapRecipeListModelToVm ,mapRecipeModelToVm,mapRecipeVmToModel } from "./mapper";
import { Recipe ,createEmptyRecipe} from "./viewModel";
import RecipeListPage from "./Page.vue";
import { mapLoginVMToModel } from "../../login/mapper";

import { fetchRecipeById, save } from "../../../rest-api/api/recipe";

export default Vue.extend({
  name: "RecipeListPageContainer",
  components: {
    RecipeListPage
  },
  data() {
    return {
      recipes: [] as Recipe[],
      recipe:createEmptyRecipe(),
      searchText: "",
      snackbar:true,
    };
  },
  computed: {
    filteredRecipes(): Recipe[] {
      return filterRecipesByCommaSeparatedText(this.recipes, this.searchText);
    },
  },
  created() {
    fetchRecipes()
      .then((recipes) => {
        this.recipes = mapRecipeListModelToVm(recipes);
      })
      .catch((error) => console.log(error));
  },
  methods: {
    onSearch(value: string) {
      this.searchText = value;
    },
    onUpdateRecipe(field:string , value:string){
      this.recipe={
        ...this.recipe,
        [field]:value,
      }
    },
    onSave(){
      const recipe = mapRecipeVmToModel(this.recipe);
      save(recipe).then((newRecipe)=>{
        const vmNewRecipe= mapRecipeModelToVm(newRecipe);
        this.recipes.push(vmNewRecipe);
        
        });
        
    }
  },
});
</script>
