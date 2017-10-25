import { Component, OnInit } from '@angular/core';
import { EstabelecimentoService } from '../../services/estabelecimento.service';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-estabelecimento',
  templateUrl: './estabelecimento.component.html',
  styleUrls: ['./estabelecimento.component.css']
})

export class EstabelecimentoComponent implements OnInit {

  especiabilidade: string;

  empresas: string[];

  errorMessage: string;

  constructor(private especialidade: EstabelecimentoService) { }

  buscarEstabelecimentos() {
    this.especialidade.buscarEstabelecimentos(this.especiabilidade)
      .subscribe(
      empresas => this.empresas = empresas,
      error => this.errorMessage = <any>error);
  }

  ngOnInit() {
  }

}
