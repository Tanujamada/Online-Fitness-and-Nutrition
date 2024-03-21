import { Injectable,inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './models/user';

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

 

  //user login
 
  userlogin(usercredobj:User):Observable<any>{
    return this.httpClient.post<any>('http://localhost:4000/user-api/user-login',usercredobj)
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

 

  
 
  setUserLoginStatus(value: boolean) {
    this.userLoginStatus.next(value)
  }
  setCurrentUser(user:User){
    this.currentUser.next(user)
  }

 


  getUserLoginStatus() {
    return this.userLoginStatus.asObservable();
  }
  getCurrentUser(){
    return this.currentUser.asObservable()
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

