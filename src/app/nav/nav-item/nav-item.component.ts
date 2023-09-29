import { Component, Inject, ViewChild } from '@angular/core';
import { MAT_BOTTOM_SHEET_DATA, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
// import { PaggingModel, ResponseModel } from 'src/app/_helpers/response-model';
// import { HomeService } from 'src/app/home/home.service';
// import { Notify } from 'src/app/home/notify';
// import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-nav-items',
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.css']
})
export class NavItemsComponent {
  @ViewChild(MatPaginator, { read: true }) paginator!: MatPaginator;
  // size = environment.pageSize;
  // page = environment.currentPage;
  // pageSizeOptions: number[] = environment.pageSizeOptions

  // notify: Notify[] = [];
  // pagingModel?:PaggingModel;

  constructor(
    private _bottomSheetRef: MatBottomSheetRef<NavItemsComponent>,
    // private homeService: HomeService,
    // @Inject(MAT_BOTTOM_SHEET_DATA) public data: Notify
  ) {
    // this.notify = data;
    this.getAll();
  }

  getAll(){
    // this.homeService.getTotalItem(this.page, this.size).subscribe(
    //   (res) => {
    //     this.pagingModel =(res.data as PaggingModel)
    //     this.notify = this.pagingModel.result;
    //   }, (error) => {
    //   }
    // );
  }

  onMarkRead(notify: any){
    // if(notify.isRead === 'Y') return
    // else{
    //   this.homeService.markRead(notify.id).subscribe(
    //     (res) => {
    //       this.getAll();
    //     }, (error) => {
    //     });
    // }
  }

  pageChanged(event: PageEvent) {
    // this.page = event.pageIndex;
    // this.size = event.pageSize;
    this.getAll();
  }
}
