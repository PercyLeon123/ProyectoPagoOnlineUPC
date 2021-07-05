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

  constructor(private readonly datosuserservice: DatosuserService, private  activeRoute: ActivatedRoute ) { }

    datosContxCod(codigo: string) {
    this.datosuserservice.datosCont().subscribe((rest: any)=> {
      console.log(this.contribuyente);
      this.contribuyente = rest.data.filter((item: {codigo: string}) => item.codigo == codigo);
    })
  }

  ngOnInit(): void {
    this.activeRoute.params.subscribe((params: Params) =>{
      if(params.codigo) {
        this.datosContxCod(params.codigo);
      }
    })

  }

}
