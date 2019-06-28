import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipesService } from 'src/app/services/recipes.service';
import { Recipe } from 'src/app/models/recipe.model';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.page.html',
  styleUrls: ['./recipe.page.scss']
})
export class RecipePage implements OnInit {
  recipeId: string;
  recipe: Recipe;
  constructor(
    private activatdRoute: ActivatedRoute,
    private recipeService: RecipesService,
    private alertCtrl: AlertController,
    private router: Router
  ) {}

  ngOnInit() {
    this.activatdRoute.paramMap.subscribe(param => {
      if (!param.has('recipeId')) {
        // redirect
        this.router.navigate(['/recipes']);
      }
      this.recipeId = param.get('recipeId');
      this.recipe = this.recipeService.getRecipe(this.recipeId);
    });
  }

  onDeleteRecipe() {
    this.alertCtrl
      .create({
        header: 'Delele Recipe!',
        message: 'Are you sure you want to delete Recipe?',
        buttons: [
          { text: 'Cancel', role: 'cancel' },
          {
            text: 'Delete',
            handler: () => {
              this.recipeService.deleteRecipe(this.recipeId);
              this.router.navigate(['/recipes']);
            }
          }
        ]
      })
      .then(alert => alert.present());
  }
}
