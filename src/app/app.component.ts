import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  receiveMessage($event: boolean) {
    throw new Error('Method not implemented.');
  }
  title = 'POS-new';
  isAuth: boolean = false;

  constructor(private router: Router) {
    
    
    console.log("???????? ", localStorage.getItem('isAuth'))
    if(localStorage.getItem('isAuth') === null){
      this.router.navigate(['/', 'login']);
    }
    
    if (localStorage.getItem('isAuth') == 'true') {
      this.isAuth = true;
    } else {
      this.isAuth = false;
    }
  }

  hasRoute(router: string) {
    if (this.router.url === router) return false;
    else {
      return true;
    }
  }
}
