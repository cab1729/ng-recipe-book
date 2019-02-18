import { NgModule } from '@angular/core';
import { ShoppinglistComponent } from './shoppinglist/shoppinglist.component';
import { ShoppinglisteditComponent } from './shoppinglist/shoppinglistedit/shoppinglistedit.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        ShoppinglistComponent,
        ShoppinglisteditComponent
    ],
    imports: [
        CommonModule,
        FormsModule
    ],
    exports: [
        FormsModule
    ]
})
export class ShoppingListModule {

}