import { Component, OnInit } from '@angular/core';
import { NzTableFilterFn, NzTableFilterList, NzTableSortFn, NzTableSortOrder } from 'ng-zorro-antd/table';
import { estadocuentacontrib } from 'src/app/interfaces/estado-cuenta-contrib';


@Component({
  selector: 'app-estado-cuenta',
  templateUrl: './estado-cuenta.component.html',
  styleUrls: ['./estado-cuenta.component.css']
})
export class EstadoCuentaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  searchValue = '';
  visible = false;


  listOfColumn = [
    {
      title: 'Año',
      compare: (a: estadocuentacontrib, b: estadocuentacontrib) => a.Anio.localeCompare(b.Anio),
      priority: 1
    },
    {
      title: 'Fecha vencimiento',
      compare: (a: estadocuentacontrib, b: estadocuentacontrib) => a.Vencimiento.localeCompare(b.Vencimiento),
      priority: 2
    },
    {
      title: 'fecha de emisión',
      compare: (a: estadocuentacontrib, b: estadocuentacontrib) => a.Fechaemision.localeCompare(b.Fechaemision),
      priority: 3
    },
      
  {
    title: 'Fact',
    compare: (a: estadocuentacontrib, b: estadocuentacontrib) => a.Fact.localeCompare(b.Fact),
    priority: 5
  },


    {
      title: 'Afrp1',
      compare: (a: estadocuentacontrib, b: estadocuentacontrib) => a.afrp1.localeCompare(b.afrp1),
      priority: 6
    },


    {
      title: 'Descripción Afrp1',
      compare: (a: estadocuentacontrib, b: estadocuentacontrib) => a.desafrp1.localeCompare(b.desafrp1),
      priority: 7
    },    

   
    {
      title: 'Importe Deuda',
      compare: (a: estadocuentacontrib, b: estadocuentacontrib) => a.ImporteDeuda.localeCompare(b.ImporteDeuda),
      priority: 10
    }
    
  ];

  listOfData: estadocuentacontrib[] = [
    {

      Anio:'2020',
      Vencimiento:'31.12.2020',
      Fechaemision:'01.12.2020',           
      Fact:'1153716',
      afrp1:'1.42110.01.25',
      desafrp1:'Impuesto Predial',      
      ImporteDeuda:'S/. 324.23',
            
    },
    {
    
      Anio:'2020',
      Vencimiento:'11.11.2020',
      Fechaemision:'01.12.2020',           
      Fact:'2112144',
      afrp1:'1.31210.11.45',
      desafrp1:'Decreto legislativo 776',      
      ImporteDeuda:'S/. 120.00'
      
    },
    {
      
      Anio:'2019',
      Vencimiento:'31.12.2020',
      Fechaemision:'01.12.2020',          
      Fact:'123214',
      afrp1:'1.1213.12.15',
      desafrp1:'Impuesto Predial',     
      ImporteDeuda:'S/. 224.50'
      
      
    },
    {
      Anio:'2020',
      Vencimiento:'31.12.2020',
      Fechaemision:'2020-11-29',    
      Fact:'1153716',
      afrp1:'1.31210.11.45',
      desafrp1:'Impuesto Predial',     
      ImporteDeuda:'S/. 324.23'      
      
    },
  ];

  listOfDisplayData = [...this.listOfData];

  reset(): void {
    this.searchValue = '';
    this.search();
  }

  search(): void {
    this.visible = false;
    this.listOfDisplayData = this.listOfData.filter((item: estadocuentacontrib) => item.Anio.indexOf(this.searchValue) !== -1);
  }

}

