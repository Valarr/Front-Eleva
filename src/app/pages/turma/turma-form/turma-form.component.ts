import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { axiosInstance } from 'src/app/api/base';
import Turma from '../../../api/escolaApi';

@Component({
  selector: 'app-turma-form',
  templateUrl: './turma-form.component.html',
  styleUrls: ['./turma-form.component.sass']
})
export class TurmaFormComponent implements OnInit {
  turmaForm!: FormGroup;
  id_escola: number = 0;

  constructor(
    private formBuilder: FormBuilder, 
    private actRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.buildTurma();
    this.id_escola = this.actRoute.snapshot.params.id_escola;
    console.log(this.id_escola);

    this.actRoute.paramMap.subscribe(res => {
      this.id_escola = Number(res.get('id_escola'));
      console.log(this.id_escola);
    });
  }

  submitForm() {
    this.createTurma();
  }

  private createTurma() {
    axiosInstance.post(`/escola/${this.id_escola}/Turma`, this.turmaForm.value)
      .then(() => console.log('Criado com sucesso'))
      .then(() => window.history.back())
      .catch((err: any) => console.log(`Erro ${err}`))
  }

  private buildTurma() {
    this.turmaForm = this.formBuilder.group({
      id_escola: [this.id_escola],
      nome_turma: [null]
    });
  }
  onSelectVoltar(){
    window.history.back();
  }
}