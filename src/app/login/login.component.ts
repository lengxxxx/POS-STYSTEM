import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public signupForm!: FormGroup;
  loginForm: any;
  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      email: [''],
      password: [''],
    });
  }
  login() {
    // this.router.navigate(['/', 'home']);
    // console.log('signup.email---', this.signupForm.value.email);
    // console.log('signup.pass---', this.signupForm.value.password);
    this.http.get<any>('http://localhost:5000/user').subscribe(
      (res) => {
        // console.log("get-------");

        const user = res.find((a: any) => {
          // console.log("a==",a);
          // console.log("a.password=--",a.password);
          // console.log("a.email=--",a.emial);

          return (
            a.email === this.signupForm.value.email &&
            a.password === this.signupForm.value.password
          );
        });
        if (user) {
          alert('login Success');
          // this.signupForm.reset();
          localStorage.setItem('isAuth', 'true');

          this.router.navigate(['/', 'home']);
        } else {
          alert('user not found!!');
        }
      },
      (_err) => {
        alert('Something went wrong!!');
      }
    );
  }
}
