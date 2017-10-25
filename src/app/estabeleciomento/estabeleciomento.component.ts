import { Component, OnInit } from '@angular/core';
import { EstabelecimentoService } from '../../services/estabelecimento.service';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-remedio',
  templateUrl: './remedio.component.html',
  styleUrls: ['./remedio.component.css']
})

export class EstabelecimentoComponent implements OnInit {

  especiabilidade: string;

  empresas: string[];

  errorMessage: string;

  constructor(public remedio: EstabelecimentoService) { }

  pesquisaRemedio() {
    this.remedio.buscarRemedio(this.especiabilidade)
      .subscribe(
      empresas => this.empresas = empresas,
      error => this.errorMessage = <any>error);
  }

  ngOnInit() {
  }

}
