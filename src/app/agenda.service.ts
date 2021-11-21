import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { concat, Observable } from 'rxjs';
import { AulaModel } from './aula.model';
import { HttpHeaders } from '@angular/common/http';
import { PerfilModel } from './perfil.model';

@Injectable({
  providedIn: 'root'
})
export class AgendaService {


  constructor(private http : HttpClient) { } 

  agendaSegunda() : Observable<any> {
    return this.http.get("http://localhost:3000/segunda");
  }
  agendaTerca() : Observable<any> {
    return this.http.get("http://localhost:3000/terca");
  }
  agendaQuarta() : Observable<any> {
    return this.http.get("http://localhost:3000/quarta");
  }
  agendaQuinta() : Observable<any> {
    return this.http.get("http://localhost:3000/quinta");
  }
  agendaSexta() : Observable<any> {
    return this.http.get("http://localhost:3000/sexta");
  }



  adicionarAulaSegunda(aula : AulaModel) : Observable<any>{ 
    return this.http.post("http://localhost:3000/segunda", aula);
  }
  adicionarAulaTerca(aula : AulaModel) : Observable<any>{ 
    return this.http.post("http://localhost:3000/terca", aula);
  }
  adicionarAulaQuarta(aula : AulaModel) : Observable<any>{ 
    return this.http.post("http://localhost:3000/quarta", aula);
  }
  adicionarAulaQuinta(aula : AulaModel) : Observable<any>{ 
    return this.http.post("http://localhost:3000/quinta", aula);
  }
  adicionarAulaSexta(aula : AulaModel) : Observable<any>{ 
    return this.http.post("http://localhost:3000/sexta", aula);
  }

  
  
  
  
  
  removerAulaSegunda(id: any){ 
    return this.http.delete("http://localhost:3000/segunda/".concat(id));
  }
  removerAulaTerca(id: any){ 
    return this.http.delete("http://localhost:3000/terca/".concat(id));
  }
  removerAulaQuarta(id: any){ 
    return this.http.delete("http://localhost:3000/quarta/".concat(id));
  }
  removerAulaQuinta(id: any){ 
    return this.http.delete("http://localhost:3000/quinta/".concat(id));
  }
  removerAulaSexta(id: any){ 
    return this.http.delete("http://localhost:3000/sexta/".concat(id));
  }



  buscarPerfil() : Observable<any> {
    return this.http.get("http://localhost:3000/perfil");
  }


atualizarPerfil(id:any, dados: PerfilModel): Observable<any> {
  return this.http.put("http://localhost:3000/perfil/".concat(id),dados);

}




}
