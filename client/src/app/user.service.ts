import { Injectable,inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './models/user';
import { Admin } from './models/admin';
import { Observable } from 'rxjs/internal/Observable';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

 
  httpClient=inject(HttpClient)
 
  createUser(newUser:User):Observable<any>{
    return this.httpClient.post('http://localhost:4000/user-api/user',newUser)
  }

  createAdmin(newAdmin:Admin):Observable<any>{
    return this.httpClient.post('http://localhost:4000/admin-api/admin',newAdmin)
  }
 

  //user login
 
  userlogin(usercredobj:any):Observable<any>{
    //console.log(usercredobj)
    return this.httpClient.post('http://localhost:4000/user-api/login',usercredobj)
  }

  
  adminlogin(admincredobj:any):Observable<any>{
    //console.log(usercredobj)
    return this.httpClient.post('http://localhost:4000/admin-api/login',admincredobj)
  }
 
 
  

  userLoginStatus = new BehaviorSubject<boolean>(false);
  currentUser=new BehaviorSubject<User>({
    username:'',
    password:'',
    email:'',
    dob:'',
    gender:'',
    address:'',
    mobile:''
  })

  
  AdminLoginStatus = new BehaviorSubject<boolean>(false);
  currentAdmin=new BehaviorSubject<Admin>({
    username:'',
    password:'',
    email:'',
    dob:'',
    aadharNumber:'',
    address:'',
    mobile:''
  })

  
 
  setUserLoginStatus(value: boolean) {
    this.userLoginStatus.next(value)
  }
  setCurrentUser(user:User){
    this.currentUser.next(user)
  }

  setAdminLoginStatus(value: boolean) {
    this.AdminLoginStatus.next(value)
  }
  setCurrentAdmin(admin:Admin){
    this.currentAdmin.next(admin)
  }


  getUserLoginStatus() {
    return this.userLoginStatus.asObservable();
  }
  getCurrentUser(){
    return this.currentUser.asObservable()
  }
  
  getAdminLoginStatus() {
    return this.AdminLoginStatus.asObservable();
  }
  getCurrentAdmin(){
    return this.currentAdmin.asObservable()
  }
  

  userLogout(){
    //reset current user
    this.setCurrentUser({
      username:'',
      password:'',
      email:'',
      dob:'',
      gender:'',
      address:'',
      mobile:''
    })
    //reset loginstatus
    this.setUserLoginStatus(false);
   // clear token from storage
    localStorage.removeItem('token')

  }

}

