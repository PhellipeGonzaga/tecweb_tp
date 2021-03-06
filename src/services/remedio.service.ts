import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class RemedioService {


  private apiUrl = 'http://mobile-aceite.tcu.gov.br/mapa-da-saude/rest/remedios?produto=';

  constructor(private http: Http) { }


  buscarRemedio(produto: string): Observable<string[]> {
    return this.http.get(this.apiUrl + produto)
      .map(this.extractData)
      .catch(this.handleError);
  }
  
  private extractData(res: Response) {
    const body = res.json();
    return body || {};
  }

  private handleError(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}

