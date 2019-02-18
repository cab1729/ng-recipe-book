import { Injectable } from '@angular/core';

import { Recipe } from '../../RecipeBook/recipe/recipe.model';
import { Ingredient } from '../ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subject } from 'rxjs';

@Injectable()
export class RecipesService {

    recipesChanged = new Subject<Recipe[]>();

    private recipes: Recipe[] = [
        new Recipe(
            'Filipino Pork and Beans', 
            'No pork because there\'s Jews here', 
            'http://www.365daysofcrockpot.com/wp-content/uploads/2016/10/slow-cooker-homemade-pork-and-beans-.jpg',
            [
                new Ingredient('can of beans', 1)
            ]),
        new Recipe(
            'Mindanao Meat Loaf', 
            'The pungent taste is parrot. Put up some squaw', 
            'https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.familiesforlakecity.com%2Fwp-content%2Fuploads%2F2013%2F05%2Fparrot.jpg&f=1',
            [
                new Ingredient('parrot', 1)
            ])
    ];

    constructor(private shoppinglistService: ShoppingListService) {}

    setRecipes(recipes: Recipe[]) {
       this.recipes = recipes;
       this.recipesChanged.next(this.recipes.slice()); 
    }

    getRecipes() {
        return this.recipes;
    }

    getRecipe(id: number) {
        return this.recipes[id];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.shoppinglistService.addIngredients(ingredients);
    }

    addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    }

    updateRecipe(index: number, newRecipe: Recipe) {
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
    }

    deleteRecipe(index: number) {
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice());
    }
}