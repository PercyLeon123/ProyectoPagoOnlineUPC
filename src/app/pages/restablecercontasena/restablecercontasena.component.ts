import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-restablecercontasena',
  templateUrl: './restablecercontasena.component.html',
  styleUrls: ['./restablecercontasena.component.css']
})
export class RestablecercontasenaComponent implements OnInit {
  RestableceForm=this.fb.group ({
    dni: ['', Validators.required],
    usuario: ['', Validators.required]
  });

  constructor(private fb:FormBuilder) { }
  onSubmit() {
    if(this.RestableceForm.valid){
    }else{
      alert("DNI o Usuario no valido");
    }
  }

  ngOnInit(): void {
  }

}
