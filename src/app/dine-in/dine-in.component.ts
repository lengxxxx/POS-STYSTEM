import { Component } from '@angular/core';
import { TableService } from '../Settings/table/table.service';
import { ConfirmService } from '../confirm/confirm.service';
import { MatDialog } from '@angular/material/dialog';
import { Table } from '../Settings/table/table';

@Component({
  selector: 'app-dine-in',
  templateUrl: './dine-in.component.html',
  styleUrls: ['./dine-in.component.css']
})
export class DineInComponent {
    
  table: Table[] = [];

  constructor(
    private tableService: TableService,
  ) {
    this.getAll();
  }
  
  getAll() {
    this.tableService.getTable().subscribe((res) => {
      this.table = res;
    });
  }
  
  
}
