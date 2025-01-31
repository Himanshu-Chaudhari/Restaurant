import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-register-owner',
  templateUrl: './register-owner.component.html',
  styleUrls: ['./register-owner.component.css']
})
export class RegisterOwnerComponent {

  ownerEntryForm = new FormGroup({
    onwnerFirstName : new FormControl() ,
    ownerMiddleName : new FormControl() ,
    ownerLastName : new FormControl() ,
    countryCode : new FormControl() ,
    ownerMobileNumber : new FormControl() ,
    ownerEmail : new FormControl() ,
    governmentIdType : new FormControl() ,
    governmentId : new FormControl() ,
    password : new FormControl() 
  })

  onSubmit(){
    
  }
  
}

