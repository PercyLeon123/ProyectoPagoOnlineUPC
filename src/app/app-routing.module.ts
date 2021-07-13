import { LogoutComponent } from './pages/login/logout.component';
import { DatosUserComponent } from './pages/datos-user/datos-user.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagoPendienteComponent } from './pages/pago-pendiente/pago-pendiente.component';
import { PagoOnlineComponent } from './pages/pago-online/pago-online.component';
import { LoginComponent } from './pages/login/login.component';
import { RestablecercontasenaComponent } from './pages/restablecercontasena/restablecercontasena.component';
import { HistorialPagoComponent } from './pages/historial-pago/historial-pago.component';
import { EstadoCuentaComponent } from './pages/estado-cuenta/estado-cuenta.component';

const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'PagoPendiente', component:PagoPendienteComponent},
  {path:'realizarpago/:id', component:PagoOnlineComponent},
  
  {path:'Login', component:LoginComponent},
  {path: 'Logout', component:LogoutComponent},
  {path:'Restablecercont', component:RestablecercontasenaComponent},
  {path: 'DatosContribuyente', component:DatosUserComponent},
  {path:'historialpago', component:HistorialPagoComponent},
  {path:'estadocuentacontrib', component:EstadoCuentaComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
