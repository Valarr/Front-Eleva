import { Component, OnInit } from '@angular/core';
import School from 'src/app/api/escolaApi';

type escolaHeader = "id_escola"|"nome_escola"|"telefone"|"endereco";
type escolaData = {[x in escolaHeader]:string}
type tableHeader = {[x in escolaHeader]:string}

@Component({
  selector: 'app-school-list',
  templateUrl: './school-list.component.html',
  styleUrls: ['./school-list.component.sass']
})
  export class SchoolListComponent implements OnInit {
  headers:escolaHeader[] = ["id_escola", "nome_escola", "telefone", "endereco"];
  tableHeader:tableHeader = {id_escola:"ID Escola", nome_escola:"Nome da Escola", telefone:"Telefone", endereco:"Endereço"};
  rows:escolaData[] = []

  constructor() { 
  }

  ngOnInit(): void {
    School.fetchAll().then(response => this.rows=response);
  }

}
