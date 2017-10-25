import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, Http, Response } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';

import { EmpregoService } from '../services/emprego.service';
import { RemedioService } from '../services/remedio.service';
import { EstabelecimentoService } from '../services/estabelecimento.service';


import { EmpregoPesquisarComponent } from './emprego-pesquisar/emprego-pesquisar.component';
import { RemedioComponent } from './remedio/remedio.component';
import { EstabelecimentoComponent } from './estabelecimento/estabelecimento.component';

const appRoutes: Routes = [
  { path: 'emprego', component: EmpregoPesquisarComponent },
  { path: 'remedio', component: RemedioComponent },
  { path: 'estabelecimento', component: EstabelecimentoComponent}
];

@NgModule({
  declarations: [AppComponent, EmpregoPesquisarComponent, RemedioComponent, EstabelecimentoComponent],

  imports: [BrowserModule, HttpModule, FormsModule,
    RouterModule.forRoot(appRoutes), AgmCoreModule.forRoot({ apiKey: 'AIzaSyAaYk-47711DvR5617oV2jy0Dn3VAY2RfY' })],

  providers: [AppComponent, EmpregoService, RemedioService,EstabelecimentoService],

  bootstrap: [AppComponent]
})
export class AppModule { }
