<<<<<<< HEAD
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { Component,OnInit } from '@angular/core';
=======
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
>>>>>>> eb307b8a29242b2a7d2b620aba36346eb45e2d29

@Component({
  selector: 'app-restablecercontasena',
  templateUrl: './restablecercontasena.component.html',
  styleUrls: ['./restablecercontasena.component.css']
})
export class RestablecercontasenaComponent implements OnInit {
<<<<<<< HEAD
  RestableceForm: FormGroup;

  constructor(private fb: FormBuilder) { }
=======

  RestableceForm=this.fb.group ({
    dni: ['', Validators.required],
    usuario: ['', Validators.required]
  });

  constructor(private fb:FormBuilder) { }

>>>>>>> eb307b8a29242b2a7d2b620aba36346eb45e2d29
  onSubmit() {
    if(this.RestableceForm.valid){
    }else{
      alert("DNI o Usuario no valido");
    }
  }

  ngOnInit(): void {
    this.RestableceForm=this.fb.group({
      dni: ['', Validators.required],
      usuario: ['', Validators.required],

    });

  }

}
