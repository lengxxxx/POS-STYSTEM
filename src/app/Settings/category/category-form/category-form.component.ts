import { Component, Inject } from '@angular/core';
import { category } from '../category';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CategoryService } from '../category.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.css']
})
export class CategoryFormComponent {
  category:category = new category();
  

  constructor(
    private dialogRef: MatDialogRef<CategoryFormComponent>,
    private CategoryService: CategoryService  ,
    @Inject(MAT_DIALOG_DATA) public data: category
  ) {
    this.category = data;
    console.log("data====",data);
    
  }
  
  onSubmit(f: NgForm) {
    console.log("submit--");
    
    if (!f.valid) {
      
      return;
    }
    if (this.category.id) {
      this.CategoryService.put( this.category).subscribe(
        (data) => {
          this.dialogRef.close();
        }
      );
    } else {
      this.CategoryService.post(this.category).subscribe(
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
