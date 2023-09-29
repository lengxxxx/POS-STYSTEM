import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  public signinForm!: FormGroup;
  loginForm: any;
  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.signinForm = this.formBuilder.group({
      email: [''],
      password: [''],
    });
  }
  login() {
    console.log('signin.email---', this.signinForm.value.email);
    console.log('signin.pass---', this.signinForm.value.password);
    this.http.get<any>('http://localhost:5000/signinUser').subscribe(
      (res) => {
        console.log("get-------");
        
        const user = res.find((a: any) => {
          
          console.log("a==",a);
          // console.log("a.password=--",a.password);
          // console.log("a.email=--",a.emial);

          return (
            a.email === this.signinForm.value.email &&
            a.password === this.signinForm.value.password
          );
        });
        if (user) {
          alert('login Success');
          this.signinForm.reset();
          this.router.navigate(['/', 'first']);
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
