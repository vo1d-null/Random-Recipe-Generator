import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-recipe-display',
  templateUrl: './recipe-display.component.html',
  styleUrls: ['./recipe-display.component.css']
})
export class RecipeDisplayComponent implements OnInit {
  recipe: any;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getRandomRecipe();
  }

  getRandomRecipe() {
    const apiKey = '25a163b3e34748ebadc1d1ca85f7354d'; // Replace with your API key
    const apiUrl = `https://api.spoonacular.com/recipes/random?apiKey=${apiKey}`;

    this.http.get(apiUrl).subscribe((response: any) => {
      this.recipe = response.recipes[0];
    });
  }
}
