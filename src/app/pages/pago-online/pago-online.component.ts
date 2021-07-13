import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-pago-online',
  templateUrl: './pago-online.component.html',
  styleUrls: ['./pago-online.component.css']
})
export class PagoOnlineComponent implements OnInit {

  user = sessionStorage.getItem('user');

  id:string;
  
  constructor(private activateRoute : ActivatedRoute,
               private modal: NzModalService) {
   }

   success(): void {
    this.modal.success({
      nzTitle: 'Tu pago fue realizado exitosamente',
      nzContent: 'Gracias !'
    });
  }



  ngOnInit(): void {
    this.activateRoute.params.subscribe(params =>{
      /* params.id el id es el nombre que especificamos en el archivo de rutas */
      this.id = params.id;
    });
  }

}
