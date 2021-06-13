import { Component, OnInit } from '@angular/core';
import { historialpago } from '../../interfaces/historial-pagos';
import { NzTableFilterFn, NzTableFilterList, NzTableSortFn, NzTableSortOrder } from 'ng-zorro-antd/table';

@Component({
  selector: 'app-historial-pago',
  templateUrl: './historial-pago.component.html',
  styleUrls: ['./historial-pago.component.css']
})
export class HistorialPagoComponent implements OnInit {

  
  
  constructor() { }

  ngOnInit(): void {
  }

  searchValue = '';
  visible = false;


  listOfColumn = [
    {
      title: 'Año',
      compare: (a: historialpago, b: historialpago) => a.Anio.localeCompare(b.Anio),
      priority: 1
    },
    {
      title: 'Fecha vencimiento',
      compare: (a: historialpago, b: historialpago) => a.Vencimiento.localeCompare(b.Vencimiento),
      priority: 2
    },
    {
      title: 'fecha de pago',
      compare: (a: historialpago, b: historialpago) => a.Fechapago.localeCompare(b.Fechapago),
      priority: 3
    },
    {
      title: 'No Operación',
      compare: (a: historialpago, b: historialpago) => a.NroOperacion.localeCompare(b.NroOperacion),
      priority: 4
    },   
  
  {
    title: 'Fact',
    compare: (a: historialpago, b: historialpago) => a.Fact.localeCompare(b.Fact),
    priority: 5
  },


    {
      title: 'Afrp1',
      compare: (a: historialpago, b: historialpago) => a.afrp1.localeCompare(b.afrp1),
      priority: 6
    },


    {
      title: 'Afrp1',
      compare: (a: historialpago, b: historialpago) => a.desafrp1.localeCompare(b.desafrp1),
      priority: 7
    },    

    {
      title: 'Transacción',
      compare: (a: historialpago, b: historialpago) => a.Transaccion.localeCompare(b.Transaccion),
      priority: 8
    },
    {
      title: 'Fecha',
      compare: (a: historialpago, b: historialpago) => a.Fecha.localeCompare(b.Fecha),
      priority: 9
    },
    {
      title: 'Importe Deuda',
      compare: (a: historialpago, b: historialpago) => a.ImporteDeuda.localeCompare(b.ImporteDeuda),
      priority: 10
    }
    
  ];

  listOfData: historialpago[] = [
    {

      Anio:'2020',
      Vencimiento:'31.12.2020',
      Fechapago:'01.12.2020',
      NroOperacion:'0456',
      Transaccion:'BCP',
      Fact:'1153716',
      afrp1:'1.42110.01.25',
      desafrp1:'Impuesto Predial',
      Fecha:'2020-11-29',
      ImporteDeuda:'S/. 324.23',
      
      
    },
    {
    
      Anio:'2020',
      Vencimiento:'11.11.2020',
      Fechapago:'01.12.2020',
      NroOperacion:'0456',
      Transaccion:'BCP',
      Fact:'2112144',
      afrp1:'1.31210.11.45',
      desafrp1:'Decreto legislativo 776',
      Fecha:'2020-11-30',
      ImporteDeuda:'S/. 120.00',
      
    },
    {
      
      Anio:'2019',
      Vencimiento:'31.12.2020',
      Fechapago:'01.12.2020',
      NroOperacion:'0456',
      Transaccion:'BBVA',
      Fact:'123214',
      afrp1:'1.1213.12.15',
      desafrp1:'Impuesto Predial',
      Fecha:'2020-10-30',
      ImporteDeuda:'S/. 224.50',
      
      
    },
    {
      
      Anio:'2020',
      Vencimiento:'31.12.2020',
      Fechapago:'01.12.2020',
      NroOperacion:'0456',
      Transaccion:'BCP',
      Fact:'1153716',
      afrp1:'1.31210.11.45',
      desafrp1:'Impuesto Predial',
      Fecha:'2020-11-29',
      ImporteDeuda:'S/. 324.23',
      
      
    },
  ];

  listOfDisplayData = [...this.listOfData];

  reset(): void {
    this.searchValue = '';
    this.search();
  }

  search(): void {
    this.visible = false;
    this.listOfDisplayData = this.listOfData.filter((item: historialpago) => item.Anio.indexOf(this.searchValue) !== -1);
  }

}
