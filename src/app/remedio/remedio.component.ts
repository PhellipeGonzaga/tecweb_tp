import { Component, OnInit } from '@angular/core';
import { RemedioService } from '../../services/remedio.service';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-remedio',
  templateUrl: './remedio.component.html',
  styleUrls: ['./remedio.component.css']
})

export class RemedioComponent implements OnInit {

  produto: string;

  remedios: string[];

  errorMessage: string;

  constructor(public remedio: RemedioService) { }

  pesquisaRemedio() {
    this.remedio.buscarRemedio(this.produto)
      .subscribe(
      remedios => this.remedios = remedios,
      error => this.errorMessage = <any>error);
  }

  ngOnInit() {
  }

}
