import { Component } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MenuService } from '../menu.service';
import { Menu } from '../menu';
import { NgForm } from '@angular/forms';
import { Inject } from '@angular/core';
import { StockService } from '../../stock/stock.service';
import { CategoryService } from '../../category/category.service';

@Component({
  selector: 'app-menu-form',
  templateUrl: './menu-form.component.html',
  styleUrls: ['./menu-form.component.css'],
})
export class MenuFormComponent {
  menuTemplate: Menu = new Menu();
  menu: Menu = new Menu();

  constructor(
    private dialogRef: MatDialogRef<MenuFormComponent>,
    private menuService: MenuService,
    private stockService: StockService,
    private categorySevice: CategoryService,
    @Inject(MAT_DIALOG_DATA) public data: Menu
  ) {
    this.menu = data;
    this.getTemplate();
  }

  getTemplate() {
    this.stockService.getTemplate().subscribe((res) => {
      this.menuTemplate.ingredient = res;
      // this.dialogRef.close();
    });
    this.categorySevice.gets().subscribe((res) => {
      this.menuTemplate.category = res;
    });
  }

  onSubmit(f: NgForm) {
    console.log("this.menuService---",this.menu);
    
    if (!f.valid) {
      return;
    }
    console.log("menu---", this.menu);
    if (this.menu.id) {
      this.menuService.put(this.menu).subscribe((data) => {
        this.dialogRef.close();
      });
    } else {
      this.menuService.post(this.menu).subscribe((data) => {
        this.dialogRef.close();
      });
    }
  }

  close() {
    this.dialogRef.close();
  }
}
