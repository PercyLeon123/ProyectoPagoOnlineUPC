import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagoPendienteComponent } from './pages/pago-pendiente/pago-pendiente.component';
import { PagoOnlineComponent } from './pages/pago-online/pago-online.component';

const routes: Routes = [
  {path:'', component:PagoPendienteComponent},
  {path:'PagoPendiente', component:PagoPendienteComponent},
  {path:'PagoOnline', component:PagoOnlineComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
