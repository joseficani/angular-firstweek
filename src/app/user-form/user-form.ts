// import { Component } from '@angular/core';
import { Component, computed, signal } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators, ReactiveFormsModule, FormGroup } from '@angular/forms';

// @Component({
//   selector: 'app-user-form',
//   imports: [],
//   templateUrl: './user-form.html',
//   styleUrl: './user-form.css'
// })

@Component({
  standalone: true,
  selector: 'app-user-form',
  templateUrl: './user-form.html',
  styleUrls: ['./user-form.css'],
  imports: [ReactiveFormsModule]
})

// export class UserForm {

// }

export class UserForm {
  userForm: FormGroup;
  submitted = signal(false);

  // constructor(private fb: FormBuilder) {
  //   this.userForm = this.fb.group({
  //     fullName: ['', [Validators.required, Validators.minLength(3)]],
  //     email: ['', [Validators.required, Validators.email]],
  //     age: ['', [Validators.required, Validators.min(18), Validators.max(100)]],
  //     password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]],
  //     confirmPassword: ['', Validators.required]
  //   }, { validators: this.passwordMatch });
  // }

  constructor(private fb: FormBuilder, private router: Router) {
  this.userForm = this.fb.group({
    fullName: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    age: ['', [Validators.required, Validators.min(18), Validators.max(100)]],
    password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]],
    confirmPassword: ['', Validators.required]
  }, { validators: this.passwordMatch });
}

  passwordMatch(group: FormGroup) {
    return group.get('password')!.value === group.get('confirmPassword')!.value
      ? null : { notMatching: true };
  }

  // onSubmit() {
  //   this.submitted.set(true);
  //   if (this.userForm.valid) {
  //     console.log(this.userForm.value);
  //     this.userForm.reset();
  //   }
  // }


//   onSubmit() {
//   this.submitted.set(true);
//   if (this.userForm.valid) {
//     console.log(this.userForm.value);
//     this.userForm.reset();

//     // Navigate to task list
//     this.router.navigate(['/tasks']);
//   }
// }

onSubmit() {
  if (this.userForm.valid) {
    console.log(this.userForm.value);
    this.submitted.set(true);
    this.userForm.reset();
    setTimeout(() => {
      this.submitted.set(false);
      this.router.navigate(['/tasks']);
    }, 2000);
  }
}


}

