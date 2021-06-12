import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagoPendienteComponent } from './pages/pago-pendiente/pago-pendiente.component';
import { PagoOnlineComponent } from './pages/pago-online/pago-online.component';
import { HojaComponent } from './pages/hoja/hoja.component';

const routes: Routes = [
  {path:'', component:PagoPendienteComponent},
  {path:'PagoPendiente', component:PagoPendienteComponent},
  {path:'PagoOnline', component:PagoOnlineComponent},
  {path:'Hoja', component:HojaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
