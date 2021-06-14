import { DatosUserComponent } from './pages/datos-user/datos-user.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagoPendienteComponent } from './pages/pago-pendiente/pago-pendiente.component';
import { PagoOnlineComponent } from './pages/pago-online/pago-online.component';
import { LoginComponent } from './pages/login/login.component';
import { RestablecercontasenaComponent } from './pages/restablecercontasena/restablecercontasena.component';
import { HistorialPagoComponent } from './pages/historial-pago/historial-pago.component';

const routes: Routes = [
  {path:'', component:PagoPendienteComponent},
  {path:'PagoPendiente', component:PagoPendienteComponent},
  {path:'PagoOnline', component:PagoOnlineComponent},
  {path:'Login', component:LoginComponent},
  {path:'Restablecercont', component:RestablecercontasenaComponent},
  {path: 'DatosContribuyente', component:DatosUserComponent},
  {path:'historialpago', component:HistorialPagoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
