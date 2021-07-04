import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Params } from '@angular/router';
import { HistorialpagoService } from 'src/app/services/historialpago.service';
import { NzTableFilterFn, NzTableFilterList, NzTableSortFn, NzTableSortOrder } from 'ng-zorro-antd/table';

import { historialpago } from 'src/app/interfaces/historial-pagos';

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
   this.historialpagoService.gethistorial(idcontr,fdesde,fhasta).subscribe((Res : any )=>{
//   this.historialpago =Res;
   this.historialpagos = Res.data;

   console.log(fdesde);
   
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

  searchValue = '';
  visible = false;

  listOfColumn = [
    {
      title: 'Periodo',
      compare: (a: historialpago, b: historialpago) => a.nperiodo.localeCompare(b.nperiodo),
      priority: 2
    },

    {
      title: 'Fecha Vcmto',
      compare: (a: historialpago, b: historialpago) => a.fecha_vcmto.localeCompare(b.fecha_vcmto),
      priority: 2
    },

    
    {
      title: 'Fecha de Pago',
      compare: (a: historialpago, b: historialpago) => a.fecha_pago.localeCompare(b.fecha_pago),
      priority: 2
    },

    {
      title: 'Nro Operación',
      compare: (a: historialpago, b: historialpago) => a.Nro_ope.localeCompare(b.Nro_ope),
      priority: 2
    },

    {
      title: 'Nro Tran',
      compare: (a: historialpago, b: historialpago) => a.nro_tran.localeCompare(b.nro_tran),
      priority: 2
    },

     {
      title: 'Fact',
      compare: (a: historialpago, b: historialpago) => a.Fact.localeCompare(b.Fact),
      priority: 2
    },
    
    {
      title: 'Afpr',
      compare: (a: historialpago, b: historialpago) => a.afpr1.localeCompare(b.afpr1),
      priority: 2
    },
    {
      title: 'Desafr1',
      compare: (a: historialpago, b: historialpago) => a.des_afr1.localeCompare(b.des_afr1),
      priority: 2
    },
    {
      title: 'Code',
      compare: (a: historialpago, b: historialpago) => a.code.localeCompare(b.code),
      priority: 1
    },
    {
      title: 'Fraciona',
      compare: (a: historialpago, b: historialpago) => a.fracciona.localeCompare(b.fracciona),
      priority: 2
    },
    {
      title: 'Desfraccion',
      compare: (a: historialpago, b: historialpago) => a.des_fracciona.localeCompare(b.des_fracciona),
      priority: 1
    },
  
    {
      title: 'Importe Deuda',
      compare: (a: historialpago, b: historialpago) => a.imp_deuda.localeCompare(b.imp_deuda),
      priority: 1
    }
    
  ];
  listOfData: historialpago[] =  this.historialpagos;
  listOfDisplayData = [...this.listOfData];
  reset(): void {
    this.searchValue = '';
    this.search();
  }
  search(): void {
    this.visible = false;
    this.listOfDisplayData = this.listOfData.filter((item: historialpago) => item.afpr1.indexOf(this.searchValue) !== -1);
  }

}






