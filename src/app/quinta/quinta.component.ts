import { Component, OnInit } from '@angular/core';
import { AgendaService } from '../agenda.service';
import { AulaModel } from '../aula.model';

@Component({
  selector: 'app-quinta',
  templateUrl: './quinta.component.html',
  styleUrls: ['./quinta.component.css']
})
export class QuintaComponent implements OnInit {

  quinta: Array<any> =  new Array();
  aula : AulaModel = new AulaModel();

  constructor(private agendaService : AgendaService) { }

  ngOnInit(): void {
    this.agendaQuinta();
  }

  agendaQuinta(){
    this.agendaService.agendaQuinta().subscribe(quinta => {
      this.quinta = quinta; 
      console.log(this.quinta);

    },err=>{
      console.log('erro ao buscar agenda de quinta', err);
    })
  }

  adicionarAulaQuinta(){ 
    this.agendaService.adicionarAulaQuinta(this.aula).subscribe( aula => {
      this.agendaQuinta();
      this.aula = new AulaModel();
      },err=>{
       console.log('erro ao adicionar aula', err)
      }
    ) 
  }


  removerAulaQuinta(id : any){
    this.agendaService.removerAulaQuinta(id).subscribe( id => {
      this.aula = new AulaModel;
      this.agendaQuinta();
    },err=>{
      console.log('erro ao remover aula', err)
      }
    )
  }

}
