import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatosuserService {

  constructor(private readonly http: HttpClient) { }

  consulta() {
    return this.http.get('http://localhost:64059/api/Contribuyente/consulta');
  }
}
