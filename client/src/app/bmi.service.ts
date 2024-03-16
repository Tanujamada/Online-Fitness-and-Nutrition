import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BmiService {

  constructor() { }

 



  calculateBMI(height:any,weight:any):any
  { 
    return weight/(height*height);
  }

}
