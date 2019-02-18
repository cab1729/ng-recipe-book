import { NgModule } from '@angular/core';
import { RecipesComponent } from './recipes.component';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { RecipelistComponent } from './recipelist/recipelist.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipedetailComponent } from './recipedetail/recipedetail.component';
import { RecipeitemComponent } from '../RecipeBook/recipeitem/recipeitem.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RecipesRoutingModule } from './recipes-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [
        RecipesComponent,
        RecipeStartComponent,
        RecipelistComponent,
        RecipeEditComponent,
        RecipedetailComponent,
        RecipeitemComponent
    ],
    imports: [
        ReactiveFormsModule,
        CommonModule,
        RecipesRoutingModule,
        SharedModule
    ]
})
export class RecipesModule {

}