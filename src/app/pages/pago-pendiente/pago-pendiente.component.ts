import { Component, OnInit } from '@angular/core';
import { EstadoCuenta } from '../../interfaces/estado-cuenta';
import { NzTableFilterFn, NzTableFilterList, NzTableSortFn, NzTableSortOrder } from 'ng-zorro-antd/table';

@Component({
  selector: 'app-pago-pendiente',
  templateUrl: './pago-pendiente.component.html',
  styleUrls: ['./pago-pendiente.component.css']
})
export class PagoPendienteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  searchValue = '';
  visible = false;

  listOfColumn = [
    {
      title: 'Afpr',
      compare: (a: EstadoCuenta, b: EstadoCuenta) => a.Afpr.localeCompare(b.Afpr),
      priority: 2
    },
    {
      title: 'Code',
      compare: (a: EstadoCuenta, b: EstadoCuenta) => a.Code.localeCompare(b.Code),
      priority: 1
    },
    {
      title: 'Fraciona',
      compare: (a: EstadoCuenta, b: EstadoCuenta) => a.Fraciona.localeCompare(b.Fraciona),
      priority: 2
    },
    {
      title: 'Desfraccion',
      compare: (a: EstadoCuenta, b: EstadoCuenta) => a.Desfraccion.localeCompare(b.Desfraccion),
      priority: 1
    },
    {
      title: 'Desafr1',
      compare: (a: EstadoCuenta, b: EstadoCuenta) => a.Desafr1.localeCompare(b.Desafr1),
      priority: 2
    },
    {
      title: 'Importe Deuda',
      compare: (a: EstadoCuenta, b: EstadoCuenta) => a.ImporteDeuda.localeCompare(b.ImporteDeuda),
      priority: 1
    },
    {
      title: 'Fecha',
      compare: (a: EstadoCuenta, b: EstadoCuenta) => a.Fecha.localeCompare(b.Fecha),
      priority: 1
    }
  ];

  listOfData: EstadoCuenta[] = [
    {
      Factura:'001',
      Afpr:'string',
      Code:'1',
      Fraciona:'string',
      Desfraccion:'string',
      Desafr1:'string',
      ImporteDeuda:'string',
      Fecha:'10-04-1997',
    },
    {
      Factura:'002',
      Afpr:'string',
      Code:'2',
      Fraciona:'string',
      Desfraccion:'string',
      Desafr1:'string',
      ImporteDeuda:'string',
      Fecha:'11-04-1997',
    },
    {
      Factura:'003',
      Afpr:'string',
      Code:'3',
      Fraciona:'string',
      Desfraccion:'string',
      Desafr1:'string',
      ImporteDeuda:'string',
      Fecha:'12-04-1997',
    },
    {
      Factura:'004',
      Afpr:'string',
      Code:'4',
      Fraciona:'string',
      Desfraccion:'string',
      Desafr1:'string',
      ImporteDeuda:'string',
      Fecha:'15-04-1997',
    },
  ];

  listOfDisplayData = [...this.listOfData];

  reset(): void {
    this.searchValue = '';
    this.search();
  }

  search(): void {
    this.visible = false;
    this.listOfDisplayData = this.listOfData.filter((item: EstadoCuenta) => item.Factura.indexOf(this.searchValue) !== -1);
  }
}
