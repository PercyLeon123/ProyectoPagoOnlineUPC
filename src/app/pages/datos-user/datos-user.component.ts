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

  constructor(private readonly datosuserservice: DatosuserService,
              private activeRoute: ActivatedRoute ) { }

  consulta(retorno: string) {
    this.datosuserservice.consulta().subscribe((rest: any)=> {
      this.contribuyente = rest.data.filter((item: { retorno: string}) => item.retorno == retorno);
      console.log(rest.data);
    })
  }

  ngOnInit(): void {
    this.activeRoute.params.subscribe((params: Params) => {
      if(params.retorno) {
        this.consulta(params.retorno);
      }
    })
  }

}
