import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { RecipesService } from './recipes.service';
import { Recipe } from 'src/app/RecipeBook/recipe/recipe.model';
import 'rxjs/Rx';
import { AuthService } from 'src/app/auth/auth.service';

@Injectable()
export class DataStorageService {

    constructor(private http: Http, private recipeService: RecipesService, 
        private authService: AuthService) {}

    storeRecipes() {

        return this.http.put(
            'https://ng-recipe-book-backend-5d76c.firebaseio.com/recipes.json',
            this.recipeService.getRecipes());

    }

    getRecipes() {
        const token = this.authService.getToken();

        this.http.get('https://ng-recipe-book-backend-5d76c.firebaseio.com/recipes.json?auth=' + token)
            .map(
                (response: Response) => {
                    const recipes: Recipe[] = response.json();
                    for (let recipe of recipes) {
                        if (!recipe['ingredients']) {
                            recipe['ingredients'] = [];
                        }
                    }
                    return recipes;
                }
            )
            .subscribe(
                (recipes: Recipe[]) => {
                    this.recipeService.setRecipes(recipes);
                }
            );
    }
}