import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PerfilComponent } from './perfil/perfil.component';
import { HorariosComponent } from './horarios/horarios.component';
import { SegundaComponent } from './segunda/segunda.component';
import { TercaComponent } from './terca/terca.component';
import { QuartaComponent } from './quarta/quarta.component';
import { QuintaComponent } from './quinta/quinta.component';
import { SextaComponent } from './sexta/sexta.component';

const routes: Routes = [
  {path: '', component : PerfilComponent},
  {path: 'horarios', component : HorariosComponent},
  {path: 'segunda', component : SegundaComponent},
  {path: 'terca', component : TercaComponent},
  {path: 'quarta', component : QuartaComponent},
  {path: 'quinta', component : QuintaComponent},
  {path: 'sexta', component : SextaComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
