
import { Component, inject } from '@angular/core';
import { FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms'
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { User } from '../models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  // getters and setters
  
  get username() {
    return this.registerForm.get('username')
  }

  get password() {
    return this.registerForm.get('password')
  }

  get email() {
    return this.registerForm.get('email')
  }

  get dob() {
    return this.registerForm.get('dob')
  }

  get mobile() {
    return this.registerForm.get('mobile')
  }

  get gender() {
    return this.registerForm.get('gender')
  }

  get address() {
    return this.registerForm.get('address')
  }

  duplicateUserStatus: boolean = false
  duplicateAdminStatus: boolean = false;
  fb: FormBuilder = inject(FormBuilder);
  userService = inject(UserService)
  router = inject(Router)
  registerForm: FormGroup

  ngOnInit() {
    this.registerForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(4)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      email: [''],
      dob: [''],
      gender: ['', [Validators.required]],
      address: [''],
      mobile: ['', [Validators.required,Validators.pattern(/^[0-9]{10}$/)]],   
    });
  }

  onSubmit() {
   
    // if(this.registerForm.valid){
 

    let { username, password, email, dob, gender, address, mobile } = this.registerForm.value;
    console.log(username, password, email, dob, gender, address, mobile)
    let newUser = new User(username, password, email, dob, gender, address, mobile);
    this.userService.createUser(newUser).subscribe({
      next: (res) => {
        
        if (res.message === "user created") {
          this.router.navigate(['/login'])
        } else {
          console.log(res)
          this.duplicateUserStatus = true;
        }


      },
      error: (err) => {
        console.log("error in user creation", err)
      }
    }
    )


    // }else{
    //   console.log('there is something error')
    // }
  }
}


