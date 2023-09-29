import { Component, HostListener, Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TableService } from '../table.service';
import { Table } from '../table';

@Component({
  selector: 'app-table-form',
  templateUrl: './table-form.component.html',
  styleUrls: ['./table-form.component.css'],
})
export class TableFormComponent {
  _table: Table = new Table();
  isInteger: boolean = false;
  table: Table;

  constructor(
    private dialogRef: MatDialogRef<TableFormComponent>,
    private tableService: TableService,
    @Inject(MAT_DIALOG_DATA) public data: Table
  ) {
    this.table = data;
  }

  ngOnInit(): void {}

  onSubmit(f: NgForm) {
    if (!f.valid) {
      return;
    }
    if (this.table.id) {
      this.tableService.putTable(this.table).subscribe((data) => {
        this.dialogRef.close();
      });
    } else {
      this.tableService.postTable(this.table).subscribe((data) => {
        this.dialogRef.close();
      });
    }
  }

  close() {
    this.dialogRef.close();
  }

  @HostListener('keydown.esc')
  public onEsc() {
    this.close();
  }
}
