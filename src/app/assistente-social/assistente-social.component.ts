import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';


import { AssistenteSocialService } from '../../services/assistente-social.service';

@Component({
  selector: 'app-assistente-social',
  templateUrl: './assistente-social.component.html',
  styleUrls: ['./assistente-social.component.css']
})
export class AssistenteSocialComponent implements OnInit {

  munici: string;

  assistentes: string[];

  errorMessage: string;

  constructor(public assitente: AssistenteSocialService) { }

  ngOnInit() { }

  pesquisarAssistente() {
    this.assitente.buscarAssistente(this.munici)
      .subscribe(
      assistente => this.assistentes = assistente,
      error => this.errorMessage = <any>error);
  }

}
