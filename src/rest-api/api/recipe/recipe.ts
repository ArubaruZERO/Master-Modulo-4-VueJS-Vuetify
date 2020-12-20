import { Recipe } from "../../model";
import { mockRecipes } from "./mockData";

let recipes = mockRecipes;

export const fetchRecipes = (): Promise<Recipe[]> => {
  return Promise.resolve(recipes);
};

export const fetchRecipeById = (id: number): Promise<Recipe> => {
  const recipe = recipes.find((r) => r.id === id);
  return Promise.resolve(recipe as Recipe);
};

export const save = (recipe: Recipe): Promise<Recipe> => {
  const index = recipes.findIndex((r) => r.id === recipe.id);
  
  return index >= 0 ? saveRecipeByIndex(index, recipe) : Promise.resolve(insertRecipe(recipe));
};

const insertRecipe = (recipe:Recipe) => {
  const id = recipes.length + 1;
  const newRecipe = {...recipe,id};
  recipes=[...recipes,newRecipe];
  return newRecipe
}

const saveRecipeByIndex = (index: number, recipe: Recipe): Promise<Recipe> => {
  recipes = [...recipes.slice(0, index), recipe, ...recipes.slice(index + 1)];

  return Promise.resolve(recipe);
};
