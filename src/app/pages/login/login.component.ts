import { DatosuserService } from './../../services/datosuser.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RecaptchaErrorParameters } from 'ng-recaptcha';
import { Router } from '@angular/router';

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
    loginUsuario: ['',Validators.required],
    passwordUsuario: ['',Validators.required],
  });

  siteKey: string;

  constructor(private fl: FormBuilder,
              private readonly userService: DatosuserService,
              private router: Router) {}

  login(dataLogin){
    this.userService.login(dataLogin).subscribe((rest: any)=>{
      if(rest.isSuccess){
        sessionStorage.setItem('token', rest.data.token);
        sessionStorage.setItem('user', rest.data.apenom);
        sessionStorage.setItem('codigo', rest.data.codigocont);
        sessionStorage.setItem('nrod', rest.data.nrodoc);
        sessionStorage.setItem('domicilio', rest.data.dirdomicilio);
        sessionStorage.setItem('telefono1', rest.data.telefono1);
        sessionStorage.setItem('telefono2', rest.data.telefono2);
        sessionStorage.setItem('telefono3', rest.data.telefono3);
        sessionStorage.setItem('telefono4', rest.data.telefono4);
        sessionStorage.setItem('correo', rest.data.correo);


        this.router.navigateByUrl('/DatosContribuyente', { skipLocationChange: false}).then(()=>{
          this.router.navigate(['/DatosContribuyente']);
          window.location.reload();
        })

      }else {
        alert('Crenciales Invalidas');
      }
    })
  }

  onSubmit(){
    if(this.IngresoForm.valid){
      this.login(this.IngresoForm.value);
    }else{
      alert("Usuario o contraseña incorrecta");
    }
  }

  ngOnInit(): void {
  }

}
