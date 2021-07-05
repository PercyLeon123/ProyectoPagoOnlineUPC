import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RecaptchaErrorParameters } from 'ng-recaptcha';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public resolved(captchaResponse: string): void {
    console.log(`Resolved captcha with response: ${captchaResponse}`);
  }

  public onError(errorDetails: RecaptchaErrorParameters): void{
    console.log(`reCAPTCHA error encountered; details:`, errorDetails);
  };


  IngresoForm=this.fl.group({
    user: ['',Validators.required],
    password: ['',Validators.required],
  });

  siteKey: string;

  constructor(private fl: FormBuilder) {
   }
  onSubmit(){
    if(this.IngresoForm.valid){
      console.log(this.IngresoForm.value);
    }else{
      alert("Usuario o contraseña incorrecta");
    }
  }

  ngOnInit(): void {
  }

}
