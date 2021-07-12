import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pago-online',
  templateUrl: './pago-online.component.html',
  styleUrls: ['./pago-online.component.css']
})
export class PagoOnlineComponent implements OnInit {

  user = sessionStorage.getItem('user');

  constructor() { }

  ngOnInit(): void {
  }

}
