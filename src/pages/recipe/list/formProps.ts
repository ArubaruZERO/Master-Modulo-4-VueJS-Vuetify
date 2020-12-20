import { PropOptions } from "vue";
import { Recipe } from "./viewModel";

 export interface FormPropsDialog{
  recipe: PropOptions<Recipe>;
  onUpdateRecipe: PropOptions<(field: string, value: string) => void>;
  onSave: PropOptions<() => void>;
 }