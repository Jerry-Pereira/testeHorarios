import { Component, OnInit } from '@angular/core';
import { AgendaService } from '../agenda.service';
import { AulaModel } from '../aula.model';

@Component({
  selector: 'app-terca',
  templateUrl: './terca.component.html',
  styleUrls: ['./terca.component.css']
})
export class TercaComponent implements OnInit {

  terca: Array<any> =  new Array();
  aula : AulaModel = new AulaModel();

  constructor(private agendaService : AgendaService) { }

  ngOnInit(): void {
    this.agendaTerca();
  }

  agendaTerca(){
    this.agendaService.agendaTerca().subscribe(terca => {
      this.terca = terca; 
      console.log(this.terca);

    },err=>{
      console.log('erro ao buscar agenda de terca', err);
    })
  }


  adicionarAulaTerca(){ 
    this.agendaService.adicionarAulaTerca(this.aula).subscribe( aula => {
      this.agendaTerca();
      this.aula = new AulaModel();
      console.log(this.aula);
      },err=>{
       console.log('erro ao adicionar aula', err)
      }
    ) 
  }


  removerAulaTerca(id : any){
    this.agendaService.removerAulaTerca(id).subscribe( id => {
      this.aula = new AulaModel;
      this.agendaTerca();
    },err=>{
      console.log('erro ao remover aula', err)
      }
    )
  }

}
