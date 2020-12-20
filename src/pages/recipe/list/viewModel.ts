export interface Recipe {
  id: number;
  name: string;
  description: string;
  url:string;
  ingredients: string[];
}
export const createEmptyRecipe = (): Recipe => ({
  id: 0,
  name: "",
  url:"",
  description: "",
  ingredients: [],
});