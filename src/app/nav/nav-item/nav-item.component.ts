import { Component, Inject, ViewChild } from '@angular/core';
import { MAT_BOTTOM_SHEET_DATA, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { MatPaginator, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-nav-items',
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.css']
})
export class NavItemsComponent {
  @ViewChild(MatPaginator, { read: true }) paginator!: MatPaginator;
  constructor(
    private _bottomSheetRef: MatBottomSheetRef<NavItemsComponent>,
    // @Inject(MAT_BOTTOM_SHEET_DATA) public data: Notify
  ) {
    this.getAll();
  }

  getAll(){
    
  }
}
