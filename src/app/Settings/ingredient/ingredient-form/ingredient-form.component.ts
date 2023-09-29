import { Component, Inject } from '@angular/core';
import { ingredient } from '../ingredient';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IngredientService } from '../ingredient.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-ingredient-form',
  templateUrl: './ingredient-form.component.html',
  styleUrls: ['./ingredient-form.component.css']
})
export class IngredientFormComponent {
    
  ingredient:ingredient = new ingredient();
  

  constructor(
    private dialogRef: MatDialogRef<IngredientFormComponent>,
    private menuService: IngredientService  ,
    @Inject(MAT_DIALOG_DATA) public data: ingredient
  ) {
    this.ingredient = data;
    console.log("data====",data);
    
  }
  
  onSubmit(f: NgForm) {
    console.log("submit--");
    
    if (!f.valid) {
      
      return;
    }
    if (this.ingredient.id) {
      this.menuService.put( this.ingredient).subscribe(
        (data) => {
          this.dialogRef.close();
        }
      );
    } else {
      this.menuService.post(this.ingredient).subscribe(
        (data) => {
          this.dialogRef.close();
        }
      );
    }
  }
  

  close() {
    this.dialogRef.close();
  }
  
  
}
