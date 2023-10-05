import { Component, Inject } from '@angular/core';
import { stock } from '../stock';
import { StockService } from '../stock.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { NgForm } from '@angular/forms';
import { toNumber } from '@ngneat/transloco';

@Component({
  selector: 'app-stock-form',
  templateUrl: './stock-form.component.html',
  styleUrls: ['./stock-form.component.css'],
})
export class StockFormComponent {
  ingredientTemplate: stock = new stock();

  stock: stock = new stock();

  constructor(
    private dialogRef: MatDialogRef<StockFormComponent>,
    private stockService: StockService,
    @Inject(MAT_DIALOG_DATA) public data: stock
  ) {
    this.stock = data;
    this.getTemplate();
    let d = this.subValue(toNumber(this.stock.value), 12);
    let b = this.sumValue(toNumber(this.stock.value), 11);
  }

  sumValue(old: number | null, newValue: number) {
    let a = 0;
    if (old != null) {
      a = old + newValue;
    }
    return a;
  }
  subValue(old: number | null, newValue: number){
    let c = 0;
    if(old != null) {
      c = old - newValue;
    }
    return c;
  }

  getTemplate() {
    this.stockService.getTemplate().subscribe((res) => {
      this.ingredientTemplate.ingredient = res;
      console.log(
        'this.ingredientTemplate.ingredient::',
        this.ingredientTemplate.ingredient
      );
      // this.dialogRef.close();
    });
  }

  onSubmit(f: NgForm) {
    if (!f.valid) {
      return;
    }
    
    let old : any
    
    if (this.stock.value != null) old = toNumber(this.stock.value);
    else this.stock.value = 0;
    
    let newStock : any
    if (this.stock.value != null) newStock = toNumber(this.stock.newValue);
    else this.stock.value = 0;
    
    console.log("this.stock.issum::", this.stock.issum);
    
    if (this.stock.id) {
      
      if(this.stock.issum){
        this.stock.value = old + newStock;
      }else{
        this.stock.value = old - newStock;
      }
      this.stock.newValue = 0;
      this.stockService.put(this.stock).subscribe((data) => {
        // this.dialogRef.close();
      });
    } else {
      this.stockService.post(this.stock).subscribe((data) => {
        this.dialogRef.close();
      });
    }
  }

  close() {
    this.dialogRef.close();
  }
}
