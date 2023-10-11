import { Component } from '@angular/core';
import { TableService } from '../Settings/table/table.service';
import { ConfirmService } from '../confirm/confirm.service';
import { MatDialog } from '@angular/material/dialog';
import { Table } from '../Settings/table/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dine-in',
  templateUrl: './dine-in.component.html',
  styleUrls: ['./dine-in.component.css']
})
export class DineInComponent {
    
  table: Table[] = [];

  constructor(
    private tableService: TableService,
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
    this.router.navigate([`/dine-in/${t.id}`]);
  }
}
