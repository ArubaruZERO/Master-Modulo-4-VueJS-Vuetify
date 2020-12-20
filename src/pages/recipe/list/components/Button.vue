<template>
    


  
    <v-row justify="center">
      <v-dialog
        v-model="dialog"
        persistent
        max-width="290"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            color="primary"
            text
            v-bind="attrs"
            v-on="on"
           
          >
            New Recipe
          </v-btn>
        </template>
        <v-card>
          <v-card-title class="headline">
New 
Recipe          
</v-card-title>
      <v-card-text>
            <v-container >
            
      
         
                <v-text-field label="Recipe name"
                      dense
                      outlined
                      single-line
                      :rules="rules.recipe"
                      required
              
                      :value="recipe.name"
                      @input="(name)=> onUpdateRecipe('name' , name)"
                      ></v-text-field>
                    
            
                <v-textarea label="Description"
                      outlined
                      single-line
                      filled
                      :rules="rules.description"
                      required
                      :value="recipe.description"
                     @input="(description) => onUpdateRecipe('description', description)"
                     
                ></v-textarea>
                    

         </v-container> 

      </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="grey"
              text
              @click="close"
            >
              Cancel
            </v-btn>
            <v-btn
              color="green"
              class="white--text"
              @click="onSave"
              text
            >
              Save
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
     
    
    </v-row>
    
 

</template>

<script lang="ts">
import Vue, { PropOptions } from "vue";
import {FormPropsDialog } from "../formProps";



export default Vue.extend({
  name: "ButtonComponent",

   props:{
   recipe:{required:true},
   onSave:{required:true},
   onUpdateRecipe:{required:true},
   snackbar:{required:true},
   
   } as FormPropsDialog,
 data () {
    return {
      dialog: false,
      newRecipe:{},
      rules:{
          recipe:[val => (val || '').length > 0 || 'This field is required'],
          description:[val =>(val|| '').length > 0 || 'This field is required'],
      }
      
      
    
    }
  },
  methods:{
  close () {
      this.dialog = false
      },
  
     
    },
    
})


</script>