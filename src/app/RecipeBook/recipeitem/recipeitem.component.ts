import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Recipe } from '../../RecipeBook/recipe/recipe.model';

@Component({
  selector: 'app-recipeitem',
  templateUrl: './recipeitem.component.html',
  styleUrls: ['./recipeitem.component.css']
})
export class RecipeitemComponent implements OnInit {

  @Input() recipe: Recipe;
  @Input() index: number;

  ngOnInit() {
  }

}
