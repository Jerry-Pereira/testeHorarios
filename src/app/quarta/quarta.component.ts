import { Component, OnInit } from '@angular/core';
import { AgendaService } from '../agenda.service';
import { AulaModel } from '../aula.model';

@Component({
  selector: 'app-quarta',
  templateUrl: './quarta.component.html',
  styleUrls: ['./quarta.component.css']
})
export class QuartaComponent implements OnInit {

  quarta: Array<any> =  new Array();
  aula : AulaModel = new AulaModel();

  constructor(private agendaService : AgendaService) { }

  ngOnInit(): void {
    this.agendaQuarta();
  }

  agendaQuarta(){
    this.agendaService.agendaQuarta().subscribe(quarta => {
      this.quarta = quarta; 
      console.log(this.quarta);

    },err=>{
      console.log('erro ao buscar agenda de quarta', err);
    })

  }

  adicionarAulaQuarta(){ 
    this.agendaService.adicionarAulaQuarta(this.aula).subscribe( aula => {
      this.agendaQuarta();
      this.aula = new AulaModel();
      },err=>{
       console.log('erro ao adicionar aula', err)
      }
    ) 
  }


  removerAulaQuarta(id : any){
    this.agendaService.removerAulaQuarta(id).subscribe( id => {
      this.aula = new AulaModel;
      this.agendaQuarta();
    },err=>{
      console.log('erro ao remover aula', err)
      }
    )
  }

}
