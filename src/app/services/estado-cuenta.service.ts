import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { EstadoCuenta } from '../interfaces/estado-cuenta';


@Injectable({
  providedIn: 'root'
})
export class EstadoCuentaService {


  constructor(private  http: HttpClient) { }

  geteectapendiente(idcontribuyente :string ):Observable<EstadoCuenta>{
     
    let params = new HttpParams()
    .set('idcontribuyente', idcontribuyente);
  
  
    return this.http.get<EstadoCuenta>("/api/Contribuyente/EstadoCuentaPendiente",{params});
    
  
  }

}
