import { Component } from '@angular/core';
import { TableService } from '../Settings/table/table.service';
import { ConfirmService } from '../confirm/confirm.service';
import { MatDialog } from '@angular/material/dialog';
import { Table } from '../Settings/table/table';
import { Router } from '@angular/router';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-dine-in',
  templateUrl: './dine-in.component.html',
  styleUrls: ['./dine-in.component.css']
})
export class DineInComponent {
    
  table: Table[] = [];

  constructor(
    private tableService: TableService,
    private recipeService:RecipeService,
    private router: Router
  ) {
    this.getAll();
  }
  
  getAll() {
    this.tableService.getTable().subscribe((res) => {
      this.table = res;
    });
  }
  
  goToform(t:Table){
    this.tableService.getTableById(t.id).subscribe((res) => {
      console.log("res::",res);
      if(res.isBusy == true ){
        this.router.navigate([`/dine-in/${t.id}`]);
      }
      if(res.isBusy == false){
        this.recipeService.post().subscribe((res) => {
          if (res.id != undefined) {
            const data: Table = {
              "isBusy": true,
              "id": t.id,
              "recipeId": res.id,
              "value": t.value,
              "name": t.name,
            }
            this.tableService.putTable(data).subscribe((res => {
              this.getAll();
        this.router.navigate([`/dine-in/${t.id}`]);
              
            }))
          }
          // this.getRecipe(this.recipeId);
        })
      }
     
    })
    
  }
  // getRecipe(id: number) {
  //     if(!!id){
        
  //     }
  // }
  // recipeId(recipeId: any) {
  //   throw new Error('Method not implemented.');
  // }
}
