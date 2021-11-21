import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PerfilComponent } from './perfil/perfil.component';
import { HorariosComponent } from './horarios/horarios.component';
import { SegundaComponent } from './segunda/segunda.component';
import { TercaComponent } from './terca/terca.component';
import { QuartaComponent } from './quarta/quarta.component';
import { QuintaComponent } from './quinta/quinta.component';
import { SextaComponent } from './sexta/sexta.component';

import { AgendaService } from './agenda.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PerfilComponent,
    HorariosComponent,
    SegundaComponent,
    TercaComponent,
    QuartaComponent,
    QuintaComponent,
    SextaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AgendaService,HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
