import { Component } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MenuService } from '../menu.service';
import { Menu } from '../menu';
import { NgForm } from '@angular/forms';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-menu-form',
  templateUrl: './menu-form.component.html',
  styleUrls: ['./menu-form.component.css'],
})
export class MenuFormComponent {
  menu: Menu = new Menu();

  constructor(
    private dialogRef: MatDialogRef<MenuFormComponent>,
    private menuService: MenuService  ,
    @Inject(MAT_DIALOG_DATA) public data: Menu
  ) {
    this.menu = data;
  }

  onSubmit(f: NgForm) {
    if (!f.valid) {
      return;
    }
    if (this.menu.id) {
      this.menuService.put( this.menu).subscribe(
        (data) => {
          this.dialogRef.close();
        }
      );
    } else {
      this.menuService.post(this.menu).subscribe(
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
