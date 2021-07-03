import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { historialpago } from '../interfaces/historial-pagos';


@Injectable({
  providedIn: 'root'
})
export class HistorialpagoService {

  baseURL = environment.apiURL +"api/Contribuyente/EstadoCuentaHistorico";

  constructor(private readonly http: HttpClient) { }


gethistorial(idcontribuyente :string ,  fdesde : string,  fhasta : string):Observable<historialpago>{

  const url = this.baseURL;
  let params = new HttpParams()
  .set('idcontribuyente', idcontribuyente)
  .set('fdesde', fdesde)
  .set('fhasta', fhasta);

  return this.http.get<historialpago>(url,{params});
  

}

}
