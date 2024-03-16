import { Component,inject } from '@angular/core';
import { BmiService } from '../bmi.service';
import { Router } from '@angular/router';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { User } from '../models/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-bmi-calculation',
  templateUrl: './bmi-calculation.component.html',
  styleUrl: './bmi-calculation.component.css'
})
export class BMICalculationComponent {

  get age() {
    return this.bmiForm.get('age')
  }
  get height() {
    return this.bmiForm.get('height')
  }
  get weight() {
    return this.bmiForm.get('weight')
  }
  get gender() {
    return this.bmiForm.get('gender')
  }


  bmiForm=this.formBuilder.group({
    age:[null,Validators.required],
    height:[null,Validators.required],
    weight:[null,Validators.required],
    gender:[null,Validators.required]
  });
  

  constructor(private bmiService:BmiService,private userService:UserService,private router:Router,private formBuilder:FormBuilder){ 
  }
 

  calculateBMI():void {


  
    if(this.bmiForm.valid){
      const{height,weight}=this.bmiForm.value;
      const bmi=this.bmiService.calculateBMI(height,weight);
      this.router.navigate(['/result',{bmi:bmi,age:this.bmiForm.value.age}])
    }
}

loggedInUser?:User;


ngOnInit():void{
  this.userService.getCurrentUser().subscribe({
    next:(user:User)=>{
      this.loggedInUser=user
    },
    error:(err)=>console.log("error in calculation component",err)
  })
}
}
