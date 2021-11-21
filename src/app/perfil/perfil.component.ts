import { Component, OnInit } from '@angular/core';
import { AgendaService } from '../agenda.service'
import { PerfilModel } from '../perfil.model';


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  perfil : Array<any> =  new Array();
  dados : PerfilModel = new PerfilModel();




  constructor(private agendaService : AgendaService) { }

  ngOnInit(): void {
    this.buscarPerfil();
  }


  buscarPerfil(){
    this.agendaService.buscarPerfil().subscribe(perfil => {
      this.perfil = perfil; 
      console.log(this.perfil);

    },err=>{
      console.log('erro ao buscar perfil', err);
    })

  }

  atualizarPerfil(id:any){
    this.agendaService.atualizarPerfil(id, this.dados).subscribe(dados => {
      this.dados = new PerfilModel(); 
      this.buscarPerfil();

    },err=>{
      console.log('erro ao atualizar perfil', err);
      }
    )
    

  }

}
