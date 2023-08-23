import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-recipe-generator',
  templateUrl: './recipe-generator.component.html',
  styleUrls: ['./recipe-generator.component.css']
})
export class RecipeGeneratorComponent implements OnInit {
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getRandomRecipe();
  }

  getRandomRecipe() {
    const apiKey = '25a163b3e34748ebadc1d1ca85f7354d';
    const apiUrl = `https://api.spoonacular.com/recipes/random?apiKey=${apiKey}`;

    this.http.get(apiUrl).subscribe((response: any) => {
      // Handle the response and store the recipe data
      console.log(response);
    });
  }
}
  // Inside recipe-generator.component.ts
getRandomRecipe() {
  // ...

  this.http.get(apiUrl).subscribe((response: any) => {
    this.recipe = response.recipes[0];
  });
}

