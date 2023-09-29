    import { Component } from '@angular/core';
import { stock } from './stock';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ConfirmService } from 'src/app/confirm/confirm.service';
import { StockFormComponent } from './stock-form/stock-form.component';
import { StockService } from './stock.service';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent {
  data: stock[] = [];
  constructor(
    private stockService: StockService, 
    private confirmService: ConfirmService,
    private dialog: MatDialog,
  ) {

    this.getAll();
  }

  newDailog() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = new stock();

    this.dialog
      .open(StockFormComponent, dialogConfig)
      .afterClosed()
      .subscribe((result) => {
        this.getAll();
      });
  }
  getAll() {
    this.stockService.gets().subscribe((res) => {
      this.data = res;
    });
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    // this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  
  
  updateDailog(data: stock, isSum: boolean) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = data;
    dialogConfig.data.issum = isSum;

    this.dialog
      .open(StockFormComponent, dialogConfig)
      .afterClosed()
      .subscribe((result) => {
        this.getAll();
      });
  }
  
  deleteConfirm(data: stock) {
    const options = {
      title: ('Stock'),
      message: `${('delete-confirmation')} ${data.name}?`,
      cancelText: ('cancel'),
      confirmText: ('yes'),
    };

    this.confirmService.open(options);

    this.confirmService.confirmed().subscribe((confirmed) => {
      if (confirmed) {
        this.stockService. delete(data).subscribe(
          (data) => {
            this.getAll();
          },
          (error) => { }
        );
      }
    });
  }
}
