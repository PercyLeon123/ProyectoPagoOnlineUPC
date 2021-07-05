import { ActivatedRoute,Params } from '@angular/router';
import { DatosuserService } from './../../services/datosuser.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-datos-user',
  templateUrl: './datos-user.component.html',
  styleUrls: ['./datos-user.component.css']
})

export class DatosUserComponent implements OnInit {

  contribuyente = [];

  constructor(private readonly datosuserservice: DatosuserService) { }

    datosCont() {
    this.datosuserservice.datosCont().subscribe((rest: any)=> {
      console.log(rest.data);
      this.contribuyente = rest.data;
    })
  }

  ngOnInit(): void {
    this.datosCont();
  }

}
