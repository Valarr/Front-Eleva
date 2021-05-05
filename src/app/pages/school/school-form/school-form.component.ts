import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import School from '../../../api/escolaApi';

@Component({
  selector: 'app-school-form',
  templateUrl: './school-form.component.html',
  styleUrls: ['./school-form.component.sass']
})

export class SchoolFormComponent implements OnInit {
  schoolForm!: FormGroup;
  
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.buildSchoolForm();
  }

  submitForm() {
    this.createSchool();
  }

  private createSchool() {
    School.criaEscola(this.schoolForm.value)
      .then(() => console.log('Criado com sucesso'))
      .then(() => window.history.back())
      .catch((err: any) => console.log(`ERRO ${err}`))
  }

  // "nome_escola":string
  // "telefone":string
  // "endereco":string

  private buildSchoolForm() {
    this.schoolForm = this.formBuilder.group({
      nome_escola: [null],
      telefone: [null],
      endereco: [null],
    });
  }
  onSelectVoltar(){
    window.history.back();
  }
}
