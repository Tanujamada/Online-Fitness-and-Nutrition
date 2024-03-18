import { CanActivateFn,Router } from '@angular/router';
import { UserService } from './user.service';
import {inject} from '@angular/core'

export const protectGuard: CanActivateFn = (route, state) => {
  let userStatus:boolean;
  const userService=inject(UserService);
  const router=inject(Router)
  userService.getUserLoginStatus().subscribe({
    next:(getStatus)=>{
      userStatus=getStatus
    }
  })
  if(userStatus){
    return true
  }else{
   return router.navigate(['/login'])
    }


};
