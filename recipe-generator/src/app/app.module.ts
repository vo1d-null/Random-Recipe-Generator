import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RecipeGeneratorComponent } from './recipe-generator/recipe-generator.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { RecipeDisplayComponent } from './recipe-display/recipe-display.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipeGeneratorComponent,
    RecipeDetailsComponent,
    RecipeDisplayComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
