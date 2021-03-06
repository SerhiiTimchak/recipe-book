import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { MainHeaderComponent } from "./main-header/main-header.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { RecipesComponent } from "./recipes/recipes.component";

import { RecipeDetailComponent } from "./recipes/recipe-detail/recipe-detail.component";
import { ShoppingEditComponent } from "./shopping-list/shopping-edit/shopping-edit.component";
import { RecipeListComponent } from "./recipes/recipe-list/recipe-list.component";
import { RecipeItemComponent } from "./recipes/recipe-list/recipe-item/recipe-item.component";

@NgModule({
  declarations: [
    AppComponent,
    MainHeaderComponent,
    ShoppingListComponent,
    RecipesComponent,
    RecipeDetailComponent,
    ShoppingEditComponent,
    RecipeListComponent,
    RecipeItemComponent
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
