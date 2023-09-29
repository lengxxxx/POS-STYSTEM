import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent {
  constructor(private router: Router,
    // private authenticationService : AuthenticationService
  ) { }

  ngOnInit(): void { }

  checkAuth(roleName : string) : boolean {
    // /this.authenticationService.existAuthorization(roleName);
    return true
  }

  goToRoute(route: string) {
    
    console.log("route::::", route);
    
    this.router.navigate([route]);
  }

}
