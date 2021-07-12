import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-datos-user',
  templateUrl: './datos-user.component.html',
  styleUrls: ['./datos-user.component.css']
})

export class DatosUserComponent implements OnInit {

  user = sessionStorage.getItem('user');
  codigocont = sessionStorage.getItem('codigo');
  nrodoc = sessionStorage.getItem('nrod');
  dirdomicilio = sessionStorage.getItem('domicilio');
  telefono1 = sessionStorage.getItem('telefono1');
  telefono2 = sessionStorage.getItem('telefono2');
  telefono3 = sessionStorage.getItem('telefono3');
  telefono4 = sessionStorage.getItem('telefono4');
  correo = sessionStorage.getItem('correo');


  constructor() { }


  ngOnInit(): void {
  }

}

