import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';
import { AuthGuard } from '../auth/auth-guard.service';
import { AuthService } from '../auth/auth.service';
import { DataStorageService } from '../shared/services/data-storage.service';
import { RecipesService } from '../shared/services/recipes.service';
import { ShoppingListService } from '../shared/services/shopping-list.service';

@NgModule({
    declarations: [
        HeaderComponent,
        HomeComponent
    ],
    imports: [
        SharedModule,
        AppRoutingModule
    ],
    exports: [
        AppRoutingModule,
        HeaderComponent
    ],
    providers: [
        ShoppingListService, 
        RecipesService, 
        DataStorageService, 
        AuthService, 
        AuthGuard
    ]
})
export class CoreModule {

}