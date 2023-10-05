import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ConfirmService } from 'src/app/confirm/confirm.service';
import { CategoryFormComponent } from './category-form/category-form.component';
import { CategoryService } from './category.service';
import { category } from './category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {
  data:  category[] = [];
  // categoryService: any;
 
  
 
 
  
  constructor(
    private categoryService: CategoryService,
    private confirmService: ConfirmService,
    
    private dialog: MatDialog,
    // private authenticationService: AuthenticationService
  ) { this.getAll()
  }

  
  newDailog() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = new category();

    this.dialog
      .open(CategoryFormComponent, dialogConfig)
      .afterClosed()
      .subscribe((result) => {
        this.getAll();
      });
  }
  getAll() {
    this.categoryService.gets().subscribe((res) => {
      this.data = res ;
      
    });
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    // this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  
  
  updateDailog(data: category) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = data;
    console.log("data----", data);
    
    this.dialog
      .open(CategoryFormComponent, dialogConfig)
      .afterClosed()
      .subscribe((result) => {
        this.getAll();
      });
  }

  deleteConfirm(data: category) {
    const options = {
      title:('Category'),
      message: `${('delete-confirmation')} ${data.name}?`,
      cancelText:('cancel'),
      confirmText: ('yes'),
    };

    this.confirmService.open(options);

    this.confirmService.confirmed().subscribe((confirmed) => {
      if (confirmed) {
        this.categoryService. delete(data).subscribe(
          (data) => {
            this.getAll();
          },
          (error) => { }
        );
      }
    });
  }
}
