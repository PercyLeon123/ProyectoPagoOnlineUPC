import { Component, OnInit } from '@angular/core';
import { historialpago } from '../../interfaces/historial-pagos';
import { HistorialpagoService } from 'src/app/services/historialpago.service';
import { NzTableFilterFn, NzTableFilterList, NzTableSortFn, NzTableSortOrder } from 'ng-zorro-antd/table';
import { ActivatedRoute } from '@angular/router';
import { textSpanIsEmpty } from 'typescript';


@Component({
  selector: 'app-historial-pago',
  templateUrl: './historial-pago.component.html',
  styleUrls: ['./historial-pago.component.css']
})
export class HistorialPagoComponent implements OnInit {

  historialpago :historialpago;
  notFound = false;

   
  constructor( private readonly historialpagoService :HistorialpagoService,  private readonly: ActivatedRoute) { }


  ngOnInit(): void {
  }

  public getHistorial(idcontr:string,fdesde:string,fhasta:string){

         this.historialpagoService.gethistorial(idcontr,fdesde,fhasta).subscribe((Res : historialpago)=>{
        this.historialpago =Res;

    }, (err:any)=>{
      console.error(err);
      this.notFound = true;
    }
    ) ;           
       
        console.log(this.historialpago);
      }



}


