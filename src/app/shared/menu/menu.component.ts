import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  token = sessionStorage.getItem('token');
  user = sessionStorage.getItem('user');

  constructor() { }

  ngOnInit(): void {
  }

}
