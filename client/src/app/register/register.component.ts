
import { Component, inject } from '@angular/core';
import {  FormBuilder,Validators,FormControl,FormGroup} from '@angular/forms'
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import {User} from '../models/user';
import { Admin } from '../models/admin';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
 
  // getters and setters
  // get registerType(){
  //   return this.registerForm.get('registerType')
  // }

  get username() {
    return this.registerForm.get('username')
  }
 
  get password() {
    return this.registerForm.get('password')
  }
 
  get email() {
    return this.registerForm.get('email')
  }
  get aadharNumber(){
    return this.registerForm.get('aadharNumber')
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
 
 duplicateUserStatus:boolean=false
 duplicateAdminStatus:boolean=false;
fb:FormBuilder=inject(FormBuilder);
userService=inject(UserService)
router=inject(Router)
registerForm:FormGroup
 
ngOnInit(){
 this.registerForm=this.fb.group({
  registerType:'user',
  username:['',[Validators.required,Validators.minLength(4)]],
  password:['',[Validators.required,Validators.minLength(6)]],
  email:[''],
  dob:[''],
  gender:[''],
  address:[''],
  mobile:['',[Validators.required]],
  aadharNumber:['',[Validators.required,Validators.pattern(/^[0-9]{12}$/)]]
});
}

onSubmit(){
  if(this.registerForm.valid){
    const formData=this.registerForm.value
    console.log(formData)
    if(formData.registerType==='user'){
  let {username,password,email,dob,gender,address,mobile}=this.registerForm.value;
  console.log(username,password,email,dob,gender,address,mobile)
  let newUser=new User(username,password,email,dob,gender,address,mobile);
  this.userService.createUser(newUser).subscribe({
    next:(res)=>{
      // if(this.user.status==='VALID'){
       console.log(res)
        //alert('registered successfully')
      //navigate to login
      if(res.message==="user created"){
        this.router.navigate(['/login'])
      }else{
        console.log(res)
        this.duplicateUserStatus=true;
      }

      
    },
    error:(err)=>{
      console.log("error in user creation",err)
    }
  }
  )
}

   else if(formData.registerType==='admin'){
    let {username,password,email,dob,aadharNumber,address,mobile}=this.registerForm.value;
    console.log(username,password,email,dob,aadharNumber,address,mobile)
    let newAdmin=new Admin(username,password,email,dob,aadharNumber,address,mobile);
    this.userService.createAdmin(newAdmin).subscribe({
      next:(res)=>{
        // if(this.user.status==='VALID'){
        //   console.log(res)
          //alert('registered successfully')
        //navigate to login
        if(res.message==="admin created"){
          this.router.navigate(['/login'])
        }else{
          console.log(res)
          this.duplicateAdminStatus=true;
        }
  
        
      },
      error:(err)=>{
        console.log("error in admin creation",err)
      }
    }
    )
  }
    else{
      console.log('form is invalid')
    }
   }
}
}


