<template>
  <app-layout>
    <logout-button/>
    <form-component v-bind="$props" />
  </app-layout>
</template>

<script lang="ts">
import Vue from "vue";
import { AppLayout } from "../../../common/layouts";
import { FormProps } from "./formProps";
import { FormComponent } from "./components";
import LogoutButton from "../../../common/logout/LogoutComponent.vue"

export default Vue.extend({
  name: "RecipeEditPage",
  components: { AppLayout, FormComponent,LogoutButton },
  props: {
    recipe: { require: true },
    recipeError: { required: true },    
    onUpdateRecipe: { require: true },
    onSave: { require: true },
    onRemoveIngredient: { required: true },
    onAddIngredient: { required: true },
  } as FormProps,
});
</script>
