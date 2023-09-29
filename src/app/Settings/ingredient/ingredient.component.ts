import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ConfirmService } from 'src/app/confirm/confirm.service';
import { IngredientService } from './ingredient.service';
// import { PaggingModel } from 'src/app/_helpers/response-model';
import { IngredientFormComponent } from './ingredient-form/ingredient-form.component';
// import { AuthenticationService } from 'src/app/authentication/authentication.service';
import { environment } from 'src/environments/environment';
// import { FollowUpStatus } from '../follow-up-status/follow-up-status';
// import { FollowUpStatusFormComponent } from '../follow-up-status/follow-up-status-form/follow-up-status-form.component';
import { ingredient } from './ingredient';
import { Data } from '@angular/router';

@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.css', '../../../styles/styles.component.css']
})
export class IngredientComponent  {
  
  data:  ingredient[] = [];
 
  
 
 
  
  constructor(
    private ingredientService: IngredientService,
    private confirmService: ConfirmService,
    
    private dialog: MatDialog,
    // private authenticationService: AuthenticationService
  ) { this.getAll()
  }

  
  newDailog() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = new ingredient();

    this.dialog
      .open(IngredientFormComponent, dialogConfig)
      .afterClosed()
      .subscribe((result) => {
        this.getAll();
      });
  }
  getAll() {
    this.ingredientService.gets().subscribe((res) => {
      this.data = res ;
      
    });
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    // this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  
  
  updateDailog(data: ingredient) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = data;
    console.log("data----", data);
    
    this.dialog
      .open(IngredientFormComponent, dialogConfig)
      .afterClosed()
      .subscribe((result) => {
        this.getAll();
      });
  }

  deleteConfirm(data: ingredient) {
    const options = {
      title:('Ingredient'),
      message: `${('delete-confirmation')} ${data.name}?`,
      cancelText:('cancel'),
      confirmText: ('yes'),
    };

    this.confirmService.open(options);

    this.confirmService.confirmed().subscribe((confirmed) => {
      if (confirmed) {
        this.ingredientService. delete(data).subscribe(
          (data) => {
            this.getAll();
          },
          (error) => { }
        );
      }
    });
  }
}