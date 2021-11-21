import { Component, OnInit } from '@angular/core';
import { AgendaService } from '../agenda.service';
import { AulaModel } from '../aula.model';

@Component({
  selector: 'app-sexta',
  templateUrl: './sexta.component.html',
  styleUrls: ['./sexta.component.css']
})
export class SextaComponent implements OnInit {

  sexta: Array<any> =  new Array();
  aula : AulaModel = new AulaModel();

  constructor(private agendaService : AgendaService) { }

  ngOnInit(): void {

    this.agendaSexta();

  }

  agendaSexta(){
    this.agendaService.agendaSexta().subscribe(sexta => {
      this.sexta = sexta; 
      console.log(this.sexta);

    },err=>{
      console.log('erro ao buscar agenda de sexta', err);
    })
  }

  adicionarAulaSexta(){ 
    this.agendaService.adicionarAulaSexta(this.aula).subscribe( aula => {
      this.agendaSexta();
      this.aula = new AulaModel();
      },err=>{
       console.log('erro ao adicionar aula', err)
      }
    ) 
  }


  removerAulaSexta(id : any){
    this.agendaService.removerAulaSexta(id).subscribe( id => {
      this.aula = new AulaModel;
      this.agendaSexta();
    },err=>{
      console.log('erro ao remover aula', err)
      }
    )
  }

}
