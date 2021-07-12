import { Component, OnInit } from '@angular/core';
import { EstadoCuenta } from '../../interfaces/estado-cuenta';
import { NzTableFilterFn, NzTableFilterList, NzTableSortFn, NzTableSortOrder } from 'ng-zorro-antd/table';
import { ActivatedRoute,Params } from '@angular/router';
import { PagoPendienteService } from 'src/app/services/pago-pendiente.service';


@Component({
  selector: 'app-pago-pendiente',
  templateUrl: './pago-pendiente.component.html',
  styleUrls: ['./pago-pendiente.component.css']
})
export class PagoPendienteComponent implements OnInit {

  user = sessionStorage.getItem('user');
  codigocont = sessionStorage.getItem('codigo');
  notFound = false;

pagospendientes = []


  constructor( private readonly pagopendienteservice :PagoPendienteService,
               private activeRoute: ActivatedRoute) { }

geteectapendiente(idcontr:string){

   this.pagopendienteservice.geteectapendiente(idcontr).subscribe((Res : any )=>{

   this.pagospendientes = Res.data;

   console.log(this.pagospendientes);

}
)
}


  ngOnInit(): void {
  }
  searchValue = '';
  visible = false;

  listOfColumn =  [
    {
      title: 'Periodo',
      compare: (a: EstadoCuenta, b: EstadoCuenta) => a.nperiodo.localeCompare(b.nperiodo),
      priority: 2
    },

    {
      title: 'Fecha Vcmto',
      compare: (a: EstadoCuenta, b: EstadoCuenta) => a.fecha_vcmto.localeCompare(b.fecha_vcmto),
      priority: 2
    },


    {
      title: 'Fact',
      compare: (a: EstadoCuenta, b: EstadoCuenta) => a.Fact.localeCompare(b.Fact),
      priority: 2
    },

    {
      title: 'Afpr',
      compare: (a: EstadoCuenta, b: EstadoCuenta) => a.afpr1.localeCompare(b.afpr1),
      priority: 2
    },
    {
      title: 'Desafr1',
      compare: (a: EstadoCuenta, b: EstadoCuenta) => a.des_afr1.localeCompare(b.des_afr1),
      priority: 2
    },
    {
      title: 'Code',
      compare: (a: EstadoCuenta, b: EstadoCuenta) => a.code.localeCompare(b.code),
      priority: 1
    },
    {
      title: 'Fraciona',
      compare: (a: EstadoCuenta, b: EstadoCuenta) => a.fracciona.localeCompare(b.fracciona),
      priority: 2
    },
    {
      title: 'Desfraccion',
      compare: (a: EstadoCuenta, b: EstadoCuenta) => a.des_fracciona.localeCompare(b.des_fracciona),
      priority: 1
    },

    {
      title: 'Importe Deuda',
      compare: (a: EstadoCuenta, b: EstadoCuenta) => a.imp_deuda.localeCompare(b.imp_deuda),
      priority: 1
    }

  ];


  listOfData: EstadoCuenta[] =  this.pagospendientes;

  listOfDisplayData = [...this.listOfData];

  reset(): void {
    this.searchValue = '';
    this.search();
  }

  search(): void {
    this.visible = false;
    this.listOfDisplayData = this.listOfData.filter((item: EstadoCuenta) => item.nperiodo.indexOf(this.searchValue) !== -1);
  }
}
