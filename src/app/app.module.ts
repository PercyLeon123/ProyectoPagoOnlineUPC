import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagoPendienteComponent } from './pages/pago-pendiente/pago-pendiente.component';
import { MenuComponent } from './shared/menu/menu.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PagoOnlineComponent } from './pages/pago-online/pago-online.component';

@NgModule({
  declarations: [
    AppComponent,
    PagoPendienteComponent,
    MenuComponent,
    PagoOnlineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
