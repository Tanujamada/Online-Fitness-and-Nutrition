import { Component,OnInit } from '@angular/core';
import {inject} from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})

export class HeaderComponent implements OnInit{
  logout?:boolean;
  userService= inject(UserService)
    ngOnInit(): void {
      this.userService.getUserLoginStatus().subscribe({
        next:(loginStatus)=>{
        this.logout=loginStatus;
        },
        error:(err)=>{console.log(err)}
      })
    }
   
}
