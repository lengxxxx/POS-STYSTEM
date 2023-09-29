import { Component, EventEmitter, Output } from '@angular/core';
import { NavService } from './nav.service';
import { Observable } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Router } from '@angular/router';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent {
  @Output() messageEvent = new EventEmitter<boolean>();

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  constructor(
    public navService: NavService,
    private breakpointObserver: BreakpointObserver,
    private router: Router
  ) {}
  
  openBottomSheet(): void {
    // this._buttomSheet.open(NavItemsComponent);
  }

  logout() {
    const options = {
      title: '',
      message: 'logout-confirm',
      cancelText: 'cancel',
      confirmText: 'yes',
    };

    // this.confirmService.open(options);
    // this.confirmService.confirmed().subscribe((confirmed) => {
    //   if (confirmed) {
    //     //click yes
    //     this.authenticationService.logout();
    //     this.messageEvent.emit(false);
    //     this.router.navigate(['/login']);
    //   }
    // });
  }
}
