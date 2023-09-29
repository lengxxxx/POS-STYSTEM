import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from '../user';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {
  
  user: User = new User();
  error = '';
 

  constructor(
    private dialogRef: MatDialogRef<UserFormComponent>,
    private userService: UserService,
    // private departmentService: DepartmentService,
     public data: User
  ) {
    this.user = data;
  }

  // ngOnInit(): void {
  //   this.departmentService.getDepartments().subscribe((data: { data: any; }) => {
  //     this.departments = (data.data as PaggingModel).result;
  //   });
  // // }

  // onSubmit(f: NgForm) {
  //   if (!f.valid) {
  //     return;
  //   }

  //   if (this.user.id) {
  //     this.userService.put(this.user.id, this.user).subscribe(
  //       (data) => {
  //         this.dialogRef.close();
  //       },
  //       (error) => {
  //         this.error = error.responseMessage;
  //       }
  //     );
  //   } else {
  //     this.userService.post(this.user).subscribe(
  //       (data) => {
  //         this.dialogRef.close();
  //       },
  //       (error) => {
  //         this.error = error.responseMessage;
  //       }
  //     );
  //   }
  // }

//   close() {
//     this.dialogRef.close();
//   }

//   @HostListener('keydown.esc')
//   public onEsc() {
//     this.close();
//   }
  
// }
// function HostListener(arg0: string): (target: UserFormComponent, propertyKey: "onEsc", descriptor: TypedPropertyDescriptor<() => void>) => void | TypedPropertyDescriptor<() => void> {
//   throw new Error('Function not implemented.');
}

