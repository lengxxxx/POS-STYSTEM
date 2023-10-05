import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { Observable, map, shareReplay } from 'rxjs';
import { Menu } from 'src/app/Settings/menu/menu';
import { MenuService } from 'src/app/Settings/menu/menu.service';
import { Table } from 'src/app/Settings/table/table';
import { TableService } from 'src/app/Settings/table/table.service';
import { NavService } from 'src/app/nav/nav.service';
import { Recipe } from '../recipe';
import { RecipeService } from '../recipe.service';
import { Total } from '../total';
import { TotalService } from '../total.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

@Component({
  selector: 'app-dine-in-form',
  templateUrl: './dine-in-form.component.html',
  styleUrls: ['./dine-in-form.component.css']
})
export class DineInFormComponent {
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );
  data: Menu[] = [];
  order: Recipe[] = []
  newOrder: Recipe[] = []
  subTotal: Total[] = []
  granTotal: number = 0
  grandUnits: number = 0

  constructor(
    private menuService: MenuService,
    private breakpointObserver: BreakpointObserver,
    public navService: NavService,
    private recipeService: RecipeService,
    private totalService: TotalService,
    private dialog: MatDialog,
    
  ) {
    this.getAll();
    this.getRecipe();

  }

  getAll() {
    this.menuService.gets().subscribe((res) => {
      this.data = res
    });
  }

  updateDailog(data: Recipe, isSum: boolean) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = data;
    dialogConfig.data.issum = isSum;

    this.dialog
      .open(DineInFormComponent, dialogConfig)
      .afterClosed()
      .subscribe((result) => {
        this.getAll();
      });
  }
  
  
  getRecipe() {
    this.recipeService.gets().subscribe((res) => {
      this.order = res;
      this.getTotal();
      this.getUnits();
    });
  }

  getTotal() {
    const array_price: any = this.order.map(p => p.price * p.units)
    this.granTotal = array_price.reduce((a: number, b: number) => a + b, 0)
  }

  getUnits() {
    const array_unit: any = this.order.map(u => u.units )
    this.grandUnits = array_unit.reduce((c: number, d: number) => c + d)


  }

  onPress(order: any) {
    const array: any = this.order.map(o => o.name);


    let isExits: boolean = false;

    const conditon = (e: string) => e === order.name ? true : false;
    const _arr = this.order.map((x: any) => {
      if (x.name == order.name) {
        this.recipeService.put(x, order).subscribe((res => {
          this.getRecipe();
        }))
      }
    }
    )
    isExits = (array.some(conditon));
    if (isExits) {

    } else {
      this.recipeService.post(order).subscribe((res => {
        this.getRecipe();
      }))
    }
  }

}
