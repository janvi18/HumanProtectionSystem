import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  myForm: FormGroup
  constructor() {

    this.myForm = new FormGroup({
      userName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, this.passwordStrength]),
    })
  }

  ngOnInit(): void {
  }

  signup() {
    console.log("save user Called....")
    console.log(this.myForm.value)
    console.log("valid?? ", this.myForm.valid)

  }

  passwordStrength(control: AbstractControl) { //password ==> FormControl
    let password: string = control.value // extract value of password from control 
    let count = 0;
    let isDigit = 0, isUpper = 0, isLower = 0, isSpecial = 0;
    for (let i = 0; i < password.length; i++) {
      if (password.charAt(i) >= 'a' && password.charAt(i) <= 'z') {
        isLower = 1
      } else if (password.charAt(i) >= 'A' && password.charAt(i) <= 'Z') {
        isUpper = 1
      } else if (password.charAt(i) >= '0' && password.charAt(i) <= '9') {
        isDigit = 1
      } else {
        isSpecial = 1
      }
      count++
    }

    if (count < 8 || isDigit == 0 || isLower == 0 || isUpper == 0 || isSpecial == 0) {
      return {
        strengthError: true
      }
    } else {
      return null
    }

  }

}