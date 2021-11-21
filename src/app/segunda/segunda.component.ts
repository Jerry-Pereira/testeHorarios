import { Component, OnInit } from '@angular/core';
import { AgendaService } from '../agenda.service';
import { AulaModel } from '../aula.model';

@Component({
  selector: 'app-segunda',
  templateUrl: './segunda.component.html',
  styleUrls: ['./segunda.component.css']
})
export class SegundaComponent implements OnInit { 

  segunda: Array<any> =  new Array();
  aula : AulaModel = new AulaModel();

  constructor(private agendaService : AgendaService) { }

  ngOnInit(): void {
    this.agendaSegunda();
  }



  agendaSegunda(){
    this.agendaService.agendaSegunda().subscribe(segunda => {
      this.segunda = segunda; 
      console.log(this.segunda);
    },err=>{
      console.log('erro ao buscar agenda de segunda', err);
      }
    )
  }

  
  
  adicionarAulaSegunda(){ 
    this.agendaService.adicionarAulaSegunda(this.aula).subscribe( aula => {
      this.agendaSegunda();
      this.aula = new AulaModel();
      },err=>{
       console.log('erro ao adicionar aula', err)
      }
    ) 
  }


  removerAulaSegunda(id : any){
    this.agendaService.removerAulaSegunda(id).subscribe( id => {
      this.aula = new AulaModel;
      this.agendaSegunda();
    },err=>{
      console.log('erro ao remover aula', err)
      }
    )
  }




}
