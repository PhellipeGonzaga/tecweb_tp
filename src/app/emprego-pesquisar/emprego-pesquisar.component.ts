import { Component, OnInit } from '@angular/core';
import { EmpregoService } from '../../services/emprego.service';
import { Injectable } from '@angular/core';
import { AgmCoreModule } from '@agm/core';


@Component({
  selector: 'app-emprego-pesquisar',
  templateUrl: './emprego-pesquisar.component.html',
  styleUrls: ['./emprego-pesquisar.component.css']
})

@Injectable()
export class EmpregoPesquisarComponent implements OnInit {

  
  munici: string;
  latitude:string;
  longitude:string;
  sines: string[];
  errorMessage: string;

  constructor(public emprego: EmpregoService) { }

  ngOnInit() { }

  pesquisarSines() {
    this.emprego.buscarSines(this.munici)
      .subscribe(
      sines => this.sines = sines,
      error => this.errorMessage = <any>error);
  }

  openMap(lat, long){
    this.latitude = lat;
    this.longitude = long;
  }
}
