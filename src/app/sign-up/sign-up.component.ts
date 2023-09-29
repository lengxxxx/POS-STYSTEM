import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  public signinForm!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.signinForm = this.formBuilder.group({
      firstname: [''],
      lastname: [''],
      email: [''],
      password: [''],
      confirmpassword: [''],
    });
  }
  signIn() {
    console.log('this.signinForm.value :::', this.signinForm.value);

    if (this.signinForm.value.firstname == '') {
      alert('please insert  first ');
      return;
    }
    // console.log('signinForm:::', this.signinForm.value);

    console.log(
      'this.signinForm.value.password====',
      this.signinForm.value.password
    );
    console.log(
      '!this.signinForm.value.confirmpassword :::',
      this.signinForm.value.confirmpassword
    );

    if (
      this.signinForm.value.password !== this.signinForm.value.confirmpassword
    ) {
      alert('password not match ');
    } else {
      this.http
        .post<any>('http://localhost:5000/signinUser', this.signinForm.value)
        .subscribe(
          (_res) => {
            alert('Sign In Seccessfull');
            this.signinForm.reset();
            this.router.navigate(['/', 'login']);
          },
          (_err) => {
            alert('Something went wrong');
          }
        );
    }
  }
}
