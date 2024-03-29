import { Component, inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms'
import { UserService } from '../user.service';
import { Router } from '@angular/router'




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent implements OnInit {

  fb: FormBuilder = inject(FormBuilder);
  userService = inject(UserService);
  router = inject(Router)


  userCredErr = {
    userCredErrStatus: false,
    userCredErrMessage: ""
  }

  userCredentials: FormGroup
  ngOnInit(): void {
    this.userCredentials = this.fb.group({
      
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  // getters and setters
  get username() {
    return this.userCredentials.get('username')
  }

  get password() {
    return this.userCredentials.get('password')
  }

  onSubmitUser() {
   
      this.userService.userlogin(this.userCredentials.value).subscribe({
  
        next: (res) => {
          console.log(res)
          if(res.message === "login success"){
            //store token in local/session storages
            localStorage.setItem('token', res.token)
            //sessionStorage.setItem('token',res.token)
            this.userService.setUserLoginStatus(true)
            this.userService.setCurrentUser(res.user)
            //  this.router.navigate([`/calculation/${res.user.username}`])
            this.router.navigate(['/calculation'])
          } else {
            console.log(res)
            this.userCredErr = {
              userCredErrStatus: true,
              userCredErrMessage: res.message
            }
          }


        },
        error: (err) => { console.log('error in user login', err) }
      
      
    
   
      }
      )
    
  }
}

