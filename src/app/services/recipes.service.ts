import { Injectable } from '@angular/core';
import { Recipe } from '../models/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Ugali cabbage',
      ingredients: ['Wheat flour', 'Cabbage', 'Cooking oil', 'Carrot'],
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Ugali_and_cabbage.jpg/913px-Ugali_and_cabbage.jpg'
    },
    {
      id: 'r2',
      title: 'Sandwich de lomito',
      ingredients: ['Chicken', 'Vegetables', 'Bread', 'Cheese'],
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Lomito1.jpg/1067px-Lomito1.jpg'
    },
    {
      id: 'r3',
      title: 'Chicken Marsala',
      ingredients: ['Chicken', 'Snap peas', 'Mushroom', 'Olive oil', 'Onions'],
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Chicken_marsala_04.jpg/800px-Chicken_marsala_04.jpg'
    }
  ];
  constructor() {}

  getAllRecipes() {
    return [...this.recipes];
  }

  getRecipe(recipeId: string) {
    return {
      ...this.recipes.find(recipe => {
        return recipe.id === recipeId;
      })
    };
  }

  deleteRecipe(recipeId: string) {
    this.recipes = this.recipes.filter(recipe => {
      return recipe.id !== recipeId;
    });
  }
}
