import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Turma from 'src/app/api/turmaApi';
import { axiosInstance } from '../../../api/base';

type turmaHeader = "nome_turma"|"id_escola";
type turmaData =  {[x in turmaHeader]:string}
type tableHeader =  {[x in turmaHeader]:string}

@Component({
  selector: 'app-turma-list',
  templateUrl: './turma-list.component.html',
  styleUrls: ['./turma-list.component.sass']
})
export class TurmaListComponent implements OnInit {
  headers:turmaHeader[] = ["nome_turma","id_escola"];
  tableHeader:tableHeader = {nome_turma:"Nome da Turma",id_escola:"ID da Escola"}
  rows:turmaData[] = []

  constructor(private actRoute: ActivatedRoute) { }

  ngOnInit(): void {
    let id_escola = this.actRoute.snapshot.params.id_escola;
    console.log(id_escola);

    this.actRoute.paramMap.subscribe(res => {
      id_escola = res.get('id_escola');
      console.log(id_escola);
    });
    axiosInstance.get(`escola/${id_escola}/Turma`)
      .then(response => this.rows=response.data);
  }
  onSelectVoltar(){
    window.history.back();
  }
}

