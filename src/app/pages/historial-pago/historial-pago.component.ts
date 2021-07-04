import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Params } from '@angular/router';
import { HistorialpagoService } from 'src/app/services/historialpago.service';
import { NzTableFilterFn, NzTableFilterList, NzTableSortFn, NzTableSortOrder } from 'ng-zorro-antd/table';

import { textSpanIsEmpty } from 'typescript';


@Component({
  selector: 'app-historial-pago',
  templateUrl: './historial-pago.component.html',
  styleUrls: ['./historial-pago.component.css']
})
export class HistorialPagoComponent implements OnInit {


  notFound = false;

historialpagos = []

   
  constructor( private readonly historialpagoService :HistorialpagoService,  
               private activeRoute: ActivatedRoute) { }

  getHistorial(idcontr:string,fdesde:string,fhasta:string){
   this.historialpagoService.gethistorial(idcontr,fdesde,fhasta).subscribe((Res : any)=>{
//   this.historialpago =Res;
   this.historialpagos = Res;
   console.log(this.historialpagos);

}
)   
}

  ngOnInit(): void {
    this.activeRoute.params.subscribe((params: Params) => {
      if(params.idcontr) {
        this.getHistorial(params.idcontr,params.fdesde,params.fhasta);
        
      }
    })
    
  }

}






