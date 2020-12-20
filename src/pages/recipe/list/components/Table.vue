<template>
  
  <v-data-table :headers="headers" :items="recipes" :items-per-page="2"  class="elevation-1" >
  
  <template  v-slot:item.actions="{ item }">
      <v-icon
        small
        class="mr-2"
        @click="editItem(item)"
      >
        mdi-pencil
      </v-icon>
      <v-icon
        small
        @click="deleteItem(item)"
      >
        mdi-delete
      </v-icon>
        
      </template>
  </v-data-table>
  
</template>

<script lang="ts">
import Vue, { PropOptions } from "vue";
import { baseRoutes,router } from "../../../../router";
import { Recipe } from "../viewModel";
import HeaderComponent from "./Header.vue";
import RowComponent from "./Row.vue";



export default Vue.extend({
  name: "TableComponent",
  components: { HeaderComponent, RowComponent },
  props: {
    recipes: { required: true } as PropOptions<Recipe[]>,
    recipe: { required: true } as PropOptions<Recipe>,
  },
 data () {
      return {
        headers: [
          {
            text: 'Recipes',
            align: 'start',
            
            value: 'name',
          },
          { text: 'Description',value:"description" },
          {text:"Edit" ,value:"actions",sortable:false}
          ,
        ],
        
        
        
        
      }
    },
    methods:{
      editItem(recipe: string){
      this.$router.push(`${baseRoutes.recipe}/${recipe.id}`)  
      },
      deleteItem(){
        this.recipes.splice(this.editedIndex, 1)
        
        
      }
    }
  })
</script>

<style scoped>
 .table {
  border-collapse: collapse;
  width: 100%;
}

.table tbody tr:nth-of-type(odd) {
  background-color: rgba(0, 0, 0, 0.05);
} 
</style>
