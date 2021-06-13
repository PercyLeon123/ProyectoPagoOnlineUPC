import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  IngresoForm=this.fl.group({
    user: ['',Validators.required],
    password: ['',Validators.required],
  });

  constructor(private fl: FormBuilder) { }
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
