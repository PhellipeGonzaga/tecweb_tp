import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, Http, Response } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EmpregoService } from '../services/emprego.service';
import { RouterModule, Routes } from '@angular/router';
import { EmpregoPesquisarComponent } from './emprego-pesquisar/emprego-pesquisar.component';

import { AgmCoreModule } from '@agm/core';

const appRoutes: Routes = [
  { path: 'emprego', component: EmpregoPesquisarComponent }
];

@NgModule({
  declarations: [AppComponent, EmpregoPesquisarComponent],

  imports: [BrowserModule, HttpModule, FormsModule,
    RouterModule.forRoot(appRoutes), AgmCoreModule.forRoot({ apiKey: 'AIzaSyAaYk-47711DvR5617oV2jy0Dn3VAY2RfY' })],

  providers: [AppComponent, EmpregoService],

  bootstrap: [AppComponent]
})
export class AppModule { }
